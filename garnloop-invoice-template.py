from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_RIGHT, TA_CENTER

OUTPUT = "/Users/sherifelkady/Claude Code Server's Projects/garnloop-invoice-template.pdf"

doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=letter,
    rightMargin=0.75*inch,
    leftMargin=0.75*inch,
    topMargin=0.75*inch,
    bottomMargin=0.75*inch,
)

styles = getSampleStyleSheet()

# Custom styles
brand_color = colors.HexColor("#1A1A2E")
accent_color = colors.HexColor("#4A90D9")
light_gray = colors.HexColor("#F5F5F5")
mid_gray = colors.HexColor("#CCCCCC")
text_gray = colors.HexColor("#555555")

def style(name, **kwargs):
    s = ParagraphStyle(name, **kwargs)
    return s

company_style = style("Company", fontSize=22, fontName="Helvetica-Bold", textColor=brand_color)
tagline_style = style("Tagline", fontSize=9, fontName="Helvetica", textColor=text_gray)
heading_style = style("Heading", fontSize=10, fontName="Helvetica-Bold", textColor=colors.white)
label_style = style("Label", fontSize=8, fontName="Helvetica-Bold", textColor=text_gray, spaceAfter=2)
value_style = style("Value", fontSize=10, fontName="Helvetica", textColor=brand_color)
invoice_title_style = style("InvTitle", fontSize=28, fontName="Helvetica-Bold", textColor=accent_color, alignment=TA_RIGHT)
meta_label_style = style("MetaLabel", fontSize=8, fontName="Helvetica-Bold", textColor=text_gray, alignment=TA_RIGHT)
meta_value_style = style("MetaValue", fontSize=10, fontName="Helvetica", textColor=brand_color, alignment=TA_RIGHT)
blank_style = style("Blank", fontSize=10, fontName="Helvetica", textColor=brand_color)
total_style = style("Total", fontSize=13, fontName="Helvetica-Bold", textColor=colors.white)
footer_style = style("Footer", fontSize=8, fontName="Helvetica", textColor=text_gray, alignment=TA_CENTER)

story = []

# ── Header: Company name left, INVOICE right ──────────────────────────────────
header_data = [
    [
        Paragraph("GarnLoop, Inc.", company_style),
        Paragraph("INVOICE", invoice_title_style),
    ]
]
header_table = Table(header_data, colWidths=[3.5*inch, 3.5*inch])
header_table.setStyle(TableStyle([
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("BOTTOMPADDING", (0,0), (-1,-1), 4),
]))
story.append(header_table)
story.append(Spacer(1, 4))

# Company sub-info row
sub_data = [
    [
        Paragraph("_______________________________<br/>Address Line 1<br/>City, State, ZIP", tagline_style),
        Paragraph("", meta_label_style),
    ]
]
sub_table = Table(sub_data, colWidths=[3.5*inch, 3.5*inch])
sub_table.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP")]))
story.append(sub_table)
story.append(Spacer(1, 4))

story.append(HRFlowable(width="100%", thickness=2, color=accent_color))
story.append(Spacer(1, 16))

# ── Invoice meta + Bill To ─────────────────────────────────────────────────────
meta_left = [
    [Paragraph("BILL TO", label_style)],
    [Paragraph("Customer Name / Company", value_style)],
    [Paragraph("Address Line 1", tagline_style)],
    [Paragraph("City, State, ZIP", tagline_style)],
    [Paragraph("Country", tagline_style)],
]
meta_left_table = Table(meta_left, colWidths=[3.5*inch])
meta_left_table.setStyle(TableStyle([
    ("VALIGN", (0,0), (-1,-1), "TOP"),
    ("BOTTOMPADDING", (0,0), (-1,-1), 2),
]))

meta_right = [
    [Paragraph("Invoice Number", meta_label_style), Paragraph("INV-______", meta_value_style)],
    [Paragraph("Invoice Date", meta_label_style), Paragraph("___ / ___ / ______", meta_value_style)],
    [Paragraph("Due Date", meta_label_style), Paragraph("___ / ___ / ______", meta_value_style)],
    [Paragraph("Payment Terms", meta_label_style), Paragraph("Net ___", meta_value_style)],
]
meta_right_table = Table(meta_right, colWidths=[1.5*inch, 2.0*inch])
meta_right_table.setStyle(TableStyle([
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("BOTTOMPADDING", (0,0), (-1,-1), 4),
]))

combined = Table([[meta_left_table, meta_right_table]], colWidths=[3.5*inch, 3.5*inch])
combined.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP")]))
story.append(combined)
story.append(Spacer(1, 24))

# ── Line Items Table ───────────────────────────────────────────────────────────
line_items_header = ["#", "Description", "Qty", "Unit Price", "Amount"]
blank_row = ["", "", "", "", ""]

rows = [line_items_header] + [blank_row] * 6

items_table = Table(
    rows,
    colWidths=[0.4*inch, 3.5*inch, 0.6*inch, 1.15*inch, 1.35*inch],
)
items_table.setStyle(TableStyle([
    # Header
    ("BACKGROUND", (0,0), (-1,0), brand_color),
    ("TEXTCOLOR", (0,0), (-1,0), colors.white),
    ("FONTNAME", (0,0), (-1,0), "Helvetica-Bold"),
    ("FONTSIZE", (0,0), (-1,0), 9),
    ("ALIGN", (0,0), (-1,0), "CENTER"),
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("ROWBACKGROUND", (0,1), (-1,-1), [light_gray, colors.white]),
    ("ROWHEIGHT", (0,1), (-1,-1), 28),
    ("ROWHEIGHT", (0,0), (-1,0), 22),
    ("FONTSIZE", (0,1), (-1,-1), 9),
    ("GRID", (0,0), (-1,-1), 0.5, mid_gray),
    ("ALIGN", (2,1), (4,-1), "RIGHT"),
    ("RIGHTPADDING", (4,0), (4,-1), 8),
    ("LEFTPADDING", (1,0), (1,-1), 8),
]))
story.append(items_table)
story.append(Spacer(1, 16))

# ── Totals ─────────────────────────────────────────────────────────────────────
totals_data = [
    [Paragraph("Subtotal", label_style), Paragraph("$__________", meta_value_style)],
    [Paragraph("Tax / VAT (___%)", label_style), Paragraph("$__________", meta_value_style)],
    [Paragraph("Discount", label_style), Paragraph("$__________", meta_value_style)],
]
totals_sub = Table(totals_data, colWidths=[1.5*inch, 1.5*inch])
totals_sub.setStyle(TableStyle([
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("BOTTOMPADDING", (0,0), (-1,-1), 4),
    ("LINEBELOW", (0,-1), (-1,-1), 1, mid_gray),
]))

total_row_data = [
    ["", ""],
    [Paragraph("TOTAL DUE", total_style), Paragraph("$__________", total_style)],
]
total_row = Table(total_row_data, colWidths=[1.5*inch, 1.5*inch])
total_row.setStyle(TableStyle([
    ("BACKGROUND", (0,1), (-1,1), brand_color),
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("ROWHEIGHT", (0,1), (-1,1), 32),
    ("ALIGN", (0,1), (-1,1), "CENTER"),
    ("TOPPADDING", (0,1), (-1,1), 8),
    ("BOTTOMPADDING", (0,1), (-1,1), 8),
]))

totals_combined = Table(
    [[Paragraph("", blank_style), Table([[totals_sub], [total_row]])]],
    colWidths=[4.5*inch, 2.5*inch],
)
totals_combined.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP")]))
story.append(totals_combined)
story.append(Spacer(1, 24))

# ── Notes & Payment Info ───────────────────────────────────────────────────────
notes_data = [
    [
        Table([
            [Paragraph("NOTES", label_style)],
            [Paragraph("_________________________________________________<br/>_________________________________________________<br/>_________________________________________________", tagline_style)],
        ]),
        Table([
            [Paragraph("PAYMENT INFORMATION", label_style)],
            [Paragraph("Bank: ___________________________", tagline_style)],
            [Paragraph("Account Name: GarnLoop, Inc.", tagline_style)],
            [Paragraph("Account Number: ________________", tagline_style)],
            [Paragraph("Routing / SWIFT: ________________", tagline_style)],
        ]),
    ]
]
notes_table = Table(notes_data, colWidths=[3.5*inch, 3.5*inch])
notes_table.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP")]))
story.append(notes_table)
story.append(Spacer(1, 20))

story.append(HRFlowable(width="100%", thickness=1, color=mid_gray))
story.append(Spacer(1, 8))
story.append(Paragraph(
    "GarnLoop, Inc.  |  info@garnloop.com  |  www.garnloop.com  |  Thank you for your business.",
    footer_style
))

doc.build(story)
print(f"Invoice saved to: {OUTPUT}")
