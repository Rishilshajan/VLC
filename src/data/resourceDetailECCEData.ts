export interface ResourceDetailData {
    title: string;
    author: string;
    date: string;
    image: string;
    sections: {
        heading: string;
        content: string;
    }[];
}

export const resourceDetailECCEData: ResourceDetailData = {
    title: "Early Childhood Care and Education (ECCE) and the Role of Anganwadis",
    author: "Nasrulla Adamji",
    date: "4th July 2025",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&auto=format&fit=crop",
    sections: [
        {
            heading: "ECCE Programme Overview",
            content: "In India, Early Childhood Care and Education (ECCE) under the Integrated Child Development Services (ICDS) is designed to support this crucial phase. The programme aims to provide holistic development opportunities for children aged 3-6 years through Anganwadi Centres. These centres serve as the first point of contact for early childhood development services, offering nutrition, health care, and early learning opportunities."
        },
        {
            heading: "Role of Anganwadis",
            content: "Anganwadis play a pivotal role in implementing ECCE programmes at the grassroots level. They provide a nurturing environment where children receive nutritious meals, health check-ups, and age-appropriate learning activities. The Anganwadi Workers (AWWs) and Anganwadi Helpers (AWHs) are trained to facilitate play-based learning, cognitive development, and social skills among young children. The centres also serve as community hubs for maternal and child health services."
        },
        {
            heading: "Impact and Challenges",
            content: "ECCE programmes through Anganwadis have shown significant impact on child development outcomes, including improved school readiness, better nutritional status, and enhanced cognitive abilities. However, challenges such as inadequate infrastructure, shortage of trained personnel, and varying quality of service delivery across regions need to be addressed. VIC's evaluation work focuses on assessing the effectiveness of these programmes and recommending improvements for better outcomes."
        },
        {
            heading: "VIC's Contribution",
            content: "VIC supports ECCE initiatives by conducting impact assessments, providing technical assistance for programme improvement, and building capacities of Anganwadi workers. Our work involves developing monitoring frameworks, training modules, and evidence-based recommendations to strengthen ECCE service delivery across different states in India."
        }
    ]
};
