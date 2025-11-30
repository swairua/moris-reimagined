import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

const productCategories = {
  "Culture Media & Agars (500g)": [
    "R2A Agar",
    "AATCC Bacteriostasis Agar",
    "Alkaline Peptone Water",
    "Antibiotic Assay Medium",
    "Azotobacter Agar (Mannitol)",
    "B.T.B. Lactose Agar",
    "Bacillus cereus agar",
    "EMB Agar",
    "M-FC Agar",
    "Soya bean casein digest agar (TS Agar)",
    "Malt extract agar",
    "Brilliant green agar",
    "Urea base agar",
    "Azide dextrose agar",
    "Triple sugar iron agar",
    "Peptone water",
    "Buffered peptone agar",
    "Chapman stone agar",
    "CLED agar",
    "Sabouraud dextrose agar",
    "D-Glucose agar",
    "XLD Agar",
    "TBX Agar",
    "Mueller Hinton agar",
    "Nutrient agar",
    "Rappaport Vasiliaddis",
    "Salmonella Shigella agar",
    "Luria Bertani agar",
    "Violet red bile agar",
    "Baird Parker agar base",
    "Potato dextrose agar",
    "MacConkey agar",
    "Plate count agar",
    "Yeast extract agar",
    "Endo agar",
    "Blood agar base",
    "Mannitol salt agar",
    "Rose bengal agar",
    "Kligler Iron agar",
    "Brain heart Infusion Agar",
    "Agar powder for Bacteriology",
    "Infusion agar base",
    "Beef extract agar",
    "Orange serum agar",
    "Cetrimide agar base",
    "CLED agar with bromothymol blue",
    "Microbial content test agar",
    "Letheen agar",
    "Pseudomonas agar base",
    "Acetate agar",
    "Kings B agar medium",
    "Slantez Bartley agar",
    "Bile aesculin azide agar",
    "CCA-Chromogenic coliform agar",
    "Brucella Agar Base",
    "Deoxycholate Lactose agar",
    "Chocolate agar",
    "Brilliant Green Bile Agar",
    "Dichloran Rose Bengal Chloramphenicol Agar",
    "Iron Sulphite Agar",
    "Slanetz and Bartley Medium",
    "MRS Agar (De-Man Rogosa Sharpe Agar)",
    "TCBS Agar",
    "Simmons Citrate Agar",
    "Total Plate Count Agar",
    "Tergitol 7 Agar Base",
    "Bismuth Sulphite Agar",
    "Malachite Green agar",
    "Dichloran-glycerol (DG-18) agar",
    "Tryptone soya agar",
    "Iron sulfite agar",
    "Tryptone soya yeast extract agar (TSYE)",
    "Corn meal agar with 1% polysorbate 80",
    "Cefixime tellurite sorbitol MacConkey (CT-SMAC)",
    "Camplobacter Agar Base",
  ],
  "Broths & Fermentation Media (500g)": [
    "Soya bean casein digest medium (TS Broth)",
    "Malt extract broth",
    "Brilliant green broth",
    "MRS broth",
    "Tetrathionate broth",
    "Nutrient broth",
    "Rappaport Vasiliaddis broth",
    "Luria Bertani broth",
    "E.C Broth",
    "Potato dextrose broth",
    "MacConkey broth",
    "BHI Broth",
    "Brilliant green bile broth",
    "Letheen broth",
    "Tryptone Azolectic broth",
    "Buffered glucose broth",
    "Lactose gelatin medium modified",
    "Azide Dextrose Broth",
    "Acetamide broth",
    "Selenite F Broth",
    "Listeria enrichment broth modified",
    "Sabouraud Dextrose Broth",
    "Rappaport Vasiliaddis Broth",
    "Tryptophan Broth",
    "Mueller Kauffman Tetrathionate Broth Base",
    "Selenite cysteine broth",
    "Alkaline Saline Peptone Water",
    "Moeller Decarboxylase Broth",
    "Fraser Broth Base",
    "Tryptose Sulphite Cycloserine Agar Base",
    "Buffered Listeria Enrichment Broth Base",
    "Lysine Decarboxylase Broth",
    "Buffered Glucose Broth (MRVP Broth)",
    "Eugon LT 100 broth",
    "Eugon LT 100 agar",
    "Tryptone soya broth",
    "Bolton selective enrichment broth",
    "D/E (Dey Engley) neutralizing broth",
    "Rhamnose broth",
  ],
  "Specialty & Diagnostic Media": [
    "Anaerobic Fermentation Medium Base",
    "b-Streptococcus Selective agar Base",
    "Urea agar (Christensen)",
    "Lauryl sulphate broth",
    "Bacto Peptone",
    "Enzymatic Peptone",
    "Stuart Transport media",
    "Cary Blair media base",
    "SIM MEDIUM",
    "Hektoen Enteric Agar",
    "Perfringens Agar Base (O.P.S.P.)",
    "DNaSE Test Agar Base",
    "Sheep Blood Agar Base",
    "Listeria Identification PALCAM Agar Base",
    "Wilson Blair Agar Base",
    "Tryptic Soya Agar",
    "Chloramphenicol Yeast Glucose Agar",
    "Cysterine Lactose Electroiyte Deficient",
  ],
  "Chemical Reagents & Indicators": [
    "Kovacs reagent",
    "Salicylic acid AR",
    "Pentane sulphonic acid sodium salt monohydrate AR/HPLC",
    "Phenolphthalein pH indicator",
    "Potassium iodide AR",
    "Maximum recovery diluent",
    "Aquasol total hardness test kit",
    "Sodium dodecyl sulfate polymyxin sucrose",
  ],
  "Microbiological Testing Kits": [
    "Wagtech Potatech+",
    "Wagtech Potalab+",
    "Wagtech Potakit",
    "Wagtech Potacheck",
    "Wagtech Potatest Classic",
  ],
};

const openWhatsApp = (productName: string) => {
  const phoneNumber = "254733137332";
  const message = encodeURIComponent(
    `Hello! I'm interested in getting a quotation for: ${productName}. Please provide details and pricing.`
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

const MicrobiologyBiotechnology = () => {
  usePageMeta({
    title: "Microbiology & Biotechnology Culture Media | Laboratory Agar & Broths Kenya",
    description: "Comprehensive microbiology supplies including 100+ culture media, agars, broths, and fermentation media. Wagtech microbiological testing kits. High-purity reagents for research and industrial applications.",
    keywords: "culture media, agar, microbiology supplies, laboratory media, fermentation media, microbial culture, biotechnology, Kenya",
    type: "article",
    canonical: "https://morisenterprises.com/products/microbiology-biotechnology",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Products", url: "/#services" },
      { name: "Microbiology & Biotechnology", url: "/products/microbiology-biotechnology" },
    ],
  });

  return (
    <ProductPageLayout
      title="Microbiology and Biotechnology"
      description="Extensive range of microbiological culture media, agars, broths, and fermentation supplies including over 100 specialized products for microbial research, clinical diagnostics, and industrial applications."
    >
      {/* Product Categories */}
      <div className="space-y-12">
        {Object.entries(productCategories).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((product, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {product}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    Premium quality microbiology products for accurate laboratory results.
                  </p>
                  <Button
                    onClick={() => openWhatsApp(product)}
                    className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white font-medium text-sm"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Quote via WhatsApp
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Description */}
      <div className="mt-16 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Complete Microbiology & Biotechnology Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We supply the most comprehensive range of microbiological culture media, agars, and fermentation products in Kenya. With over 100 specialized formulations, we support research, clinical diagnostics, quality control, and industrial microbiology applications.
        </p>
        
        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Our Product Range Includes:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li><strong>General Purpose Media:</strong> Nutrient agar, peptone water, nutrient broth for routine microbial cultivation</li>
          <li><strong>Selective & Differential Media:</strong> Specialty agars for isolation and identification of specific microorganisms</li>
          <li><strong>Enrichment Media:</strong> Specialized broths for selective enrichment of target organisms</li>
          <li><strong>Fermentation Media:</strong> Complete formulations for microbial fermentation and biotechnology applications</li>
          <li><strong>Diagnostic Media:</strong> Specialized products for clinical and industrial quality control testing</li>
          <li><strong>Testing Kits:</strong> Wagtech microbiological testing kits for rapid microbial analysis</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Product Features:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>✓ Dehydrated formulations (500g packs) for easy reconstitution</li>
          <li>✓ High purity, pharmaceutical-grade ingredients</li>
          <li>✓ Consistent batch quality and performance</li>
          <li>✓ Ready-to-use prepared media plates available</li>
          <li>✓ Suitable for clinical, research, and industrial laboratories</li>
          <li>✓ Compliant with ISO and international standards</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Applications:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>Clinical microbiology and infectious disease diagnosis</li>
          <li>Food and beverage industry quality control</li>
          <li>Pharmaceutical testing and validation</li>
          <li>Environmental and water microbiology testing</li>
          <li>Biotech research and development</li>
          <li>Industrial microbiology and fermentation</li>
        </ul>
      </div>
    </ProductPageLayout>
  );
};

export default MicrobiologyBiotechnology;
