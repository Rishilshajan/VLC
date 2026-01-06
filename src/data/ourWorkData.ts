export interface WorkService {
    id: number;
    title: string;
    items?: string[];
    description?: string;
    image?: string; // For the hover background
}

export const workServices: WorkService[] = [
    {
        id: 1,
        title: "Impact Measurement & Advisory",
        items: [
            "Needs Assessment",
            "Feasibility Study",
            "Process Evaluation",
            "Outcome Evaluation",
            "Impact Evaluation (Baseline, Midline and Endline Studies)",
            "Social Return on Investment"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "MEL Training & Capacity Building",
        items: [
            "Impact Assessment Frameworks",
            "Data-based Decision Making",
            "Designing Data Collection Tools"
        ],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Research",
        items: [
            "Quantitative",
            "Qualitative",
            "Mixed-Method",
            "Difference-in-difference",
            "Randomised Control Trial"
        ],
        image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Strategy & Development",
        items: [
            "Advisory on Programme Design and optimum resource allocation",
            "Support in aligning CSR initiatives with UN SDGs and Schedule VII activities of Companies Act 2013"
        ],
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "CSR & SDG Alignment",
        description: "Evaluated an education project with a reach of 3,000+ students and 60+ schools in Karnataka.",
        image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Tool & Framework Creation",
        items: [
            "Theory of Change",
            "Logframe Matrix",
            "MEL Framework",
            "Building customised dashboards and reporting mechanisms"
        ],
        image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=500&auto=format&fit=crop"
    }
];
