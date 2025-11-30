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
    "Soya Bean Casein Digest Medium (TS Broth)",
    "Malt Extract Broth",
    "Brilliant Green Broth",
    "MRS Broth",
    "Tetrathionate Broth",
    "Nutrient Broth",
    "Rappaport Vasiliaddis Broth",
    "Luria Bertani Broth",
    "E.C Broth",
    "Potato Dextrose Broth",
    "MacConkey Broth",
    "BHI Broth",
    "Brilliant Green Bile Broth",
    "Letheen Broth",
    "Tryptone Azolectic Broth",
    "Buffered Glucose Broth",
    "Lactose Gelatin Medium Modified",
    "Azide Dextrose Broth",
    "Acetamide Broth",
    "Selenite F Broth",
    "Listeria Enrichment Broth Modified",
    "Sabouraud Dextrose Broth",
    "Tryptophan Broth (RDM-TpB-01)",
    "Alkaline Saline Peptone Water (RDM-APW-03)",
    "Moeller Decarboxylase Broth (RDM-DCX-01)",
    "Fraser Broth Base (RDM-FBB-01)",
    "Buffered Listeria Enrichment Broth Base (RDM-BLEB-01)",
    "Lysine Decarboxylase Broth (RDM-LDB-01)",
    "Buffered Glucose Broth MRVP Broth (RDM-MRVP-01)",
    "Eugon LT 100 Broth",
    "Eugon LT 100 Agar",
    "Tryptone Soya Broth",
    "Bolton Selective Enrichment Broth",
    "D/E (Dey Engley) Neutralizing Broth",
    "Rhamnose Broth",
  ],
  "Specialty & Diagnostic Media": [
    "Anaerobic Fermentation Medium Base",
    "b-Streptococcus Selective Agar Base",
    "Urea Agar (Christensen)",
    "Lauryl Sulphate Broth",
    "Bacto Peptone",
    "Enzymatic Peptone",
    "Stuart Transport Media",
    "Cary Blair Media Base",
    "SIM MEDIUM",
    "Hektoen Enteric Agar",
    "Perfringens Agar Base (O.P.S.P.)",
    "Mueller Kauffman Tetrathionate Broth Base",
    "Selenite Cysteine Broth (Twin pack)",
    "Chloramphenicol Yeast Glucose Agar",
    "Dichloran Rose Bengal Chloramphenicol Agar (DRBC)",
    "Iron Sulphite Agar",
    "Slanetz and Bartley Medium",
    "Bile Esculin Agar",
    "Pseudomonas Agar",
    "Kings B Medium Agar",
    "Acetamide Broth",
    "DNaSE Test Agar Base",
    "Sheep Blood Agar Base",
    "Listeria Identification PALCAM Agar Base",
    "Wilson Blair Agar Base",
    "Tryptic Soya Agar",
    "Lysine Decarboxylase Broth",
    "Moeller Decarboxylase Broth",
    "Fraser Broth Base",
    "Cysterine Lactose Electroiyte Deficient",
    "Glucose Agar",
    "Lactobacillus MRS Agar",
    "Malachite Green Agar",
    "Buffered Glucose Broth (MRVP Broth)",
    "Bismuth Sulphite Agar",
    "Buffered Listeria Enrichment Broth Base",
  ],
  "Chemical Reagents & Indicators": [
    "Kovacs Reagent",
    "Salicylic Acid AR",
    "Pentane Sulphonic Acid Sodium Salt Monohydrate AR/HPLC",
    "Phenolphthalein pH Indicator 100g AR",
    "Potassium Iodide AR 500g",
    "Maximum Recovery Diluent",
    "Aquasol Total Hardness Test Kit",
    "Sodium Dodecyl Sulfate Polymyxin Sucrose",
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
