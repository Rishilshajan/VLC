import { Link } from "react-router-dom";

const ResourceDetailIFC = () => {
  return (
    <div className="w-full bg-white">

      {/* Back Button (outside card, top-left) */}
      <div className="container mx-auto px-4 pt-6">
        <Link
          to="/resources"
          className="inline-flex items-center text-sm text-[#14709F] hover:underline"
        >
          ← Back
        </Link>
      </div>

      {/* Header Card */}
      <div className="container mx-auto px-4 mt-4">
        <div className="max-w-5xl mx-auto border border-[#BFD7E5] rounded-xl p-6 flex flex-col md:flex-row gap-6">

          {/* Image */}
          <img
            src="/images/ifc.jpg"   /* replace with your actual image path */
            alt="Integrated Farming Cluster"
            className="w-full md:w-64 h-48 object-cover rounded-lg"
          />

          {/* Title Section */}
          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-500 mb-2">
              Tobey Marshall | 4th July 2025
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-black leading-snug">
              Responsible Coalition for Resilient Communities (RCRC) – Integrated Farming Cluster
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Project Background */}
          <div>
            <h2 className="text-lg font-bold text-black mb-3">
              Project Background
            </h2>
            <p className="text-[#123042] leading-relaxed mb-4">
              The Integrated Farming Cluster (IFC) is a programme initiated by the NRLM, launched by the 
              National Rural Livelihoods Mission (NRLM) and supported by the NRETP, aimed to strengthen 
              rural livelihoods through—Collectivisation, Product Identification, Training & Capacity Building, 
              Establishment of Livelihood Service Centre (LSC) and Market Linkages. Funded by NRETP, the project
              spanned from 2020 to 2023, reaching over 62,000 households across 10 states.
            </p>
            <p className="text-[#123042] text-base leading-relaxed mb-6">
                 RCRC in partnership with the Ministry of Rural Development, implemented the programme
                 across 10 states through multiple CSOs. The IFC includes: 
                 </p> <ul className="text-[#123042] text-base leading-relaxed mb-6 list-disc list-inside"> 
                    <li>Crop Production (field crops, horticulture, plantations)</li> 
                    <li>Livestock (dairy, poultry, goat rearing, etc.)</li> 
                    <li>Apiculture (beekeeping)</li> 
                    <li>NTFP-based livelihoods</li> </ul>
                     <p className="text-[#123042] text-base leading-relaxed mb-6"> 
                        VIC visited GTA (Gorkhaland Territorial Administration) in West Bengal and interacted 
                        with members of the CLF and the CSO partner to understand and witness the beneficiaries'
                        growth and experience in the IFC programme.
                     </p>
          </div>
          {/* What's Changing on the Ground */}
           <h2 className="text-black font-bold text-xl mb-4">What's Changing on the Ground</h2>
           <h3 className="text-black font-semibold text-lg mb-4">First-Hand Observations</h3>
            <p className="text-[#123042] text-base leading-relaxed mb-6">
                 The IFC programme has transformed the lives and livelihoods of all unit members. It has
                 revitalised their farming practices, increased their accessibility to inputs and tools, 
                 increased their technical knowledge and understanding of cultivating crops and other 
                 livelihood practices, and provided them with opportunities for market linkages. Our 
                 on-ground visits revealed the following benefits reaped from the programme: 
                 </p> 
                 <ul className="text-[#123042] text-base leading-relaxed mb-6 list-disc list-inside"> 
                    <li><strong>Enhanced Technical Skills:</strong> Farmers reported having learnt modern techniques
                    for growing seasonal crops, practising organic farming, and using modern farming machinery.</li> 
                    <li><strong>Increased Yields:</strong> Crop productivity was reported to have significantly increased.
                    Previously, a farmer could produce 50 kg of seasonal crops, but now they can yield as much as 250 kg, 
                    as reported by a member of the CLF. The average farm size in the region is 0.6-0.8 acre.</li> 
                    <li><strong>Income Gain:</strong> On average, it estimated that there is a 20-50% increase in
                    household income due to reduced input costs, higher yields, and better market access.</li> </ul>
                     <p className="text-[#123042] text-base leading-relaxed mb-6">
                         One of the beneficiaries shared that growing cucumbers through machan cultivation 
                        instead of traditional methods, has increased her income to ₹1 lakh from ₹60,000— 
                        about a 66% increase. Additionally, cucumbers grown using machan techniques were larger in 
                        size compared to those produced using traditional methods, illustrating better-quality yields.
                        </p> <ul className="text-[#123042] text-base leading-relaxed mb-6 list-disc list-inside"> 
                        <li><strong>Improved Market Access:</strong> With newfound knowledge of market linkages, 
                        the women farmers have eliminated middlemen. Women farmers reported, instead of selling for 
                        ₹10 to intermediaries, they now earn ₹30–₹40 per unit by selling directly through Producer Groups.</li>
                         <li><strong>Improved Awareness:</strong> 
                         Farmers stated they now understand the roles of support organisations like Rajarhat Prasari, 
                         CRPs, CLFs, and relevant government departments. They know where to seek help and how to navigate 
                         available services.
                         </li> 
                         <li><strong>Stronger Relationships with Government Officials:</strong> 
                         Personal rapport and regular engagement have fostered mutual trust between women 
                         farmers and government officials, enabling smoother access to schemes and support.
                         </li> </ul> 
                         {/* Sustainable Impact */} 
                         <h3 className="text-black font-semibold text-lg mb-4">Sustainable Impact</h3>
                          <p className="text-[#123042] text-base leading-relaxed mb-6"> <strong>
                            Behaviour, Attitude & Perceptions:</strong>
                            There has been a shift in mindset—from farming for survival to treating agriculture as a viable,
                            income-generating enterprise. With increased confidence, farmers now see themselves as agents of
                            their own economic progress. 
                            </p> 
                            <p className="text-[#123042] text-base leading-relaxed mb-6"> <strong>Future Aspirations:</strong> 
                            Beneficiaries are planning ahead by leveraging local resources and market opportunities, with many
                            investing in small agri-businesses like seed production and value-added processing to build 
                            sustainable livelihoods. 
                            </p> 
                            {/* On Ground Story */} 
                            <h3 className="text-black font-semibold text-lg mb-4">On ground story</h3>
                             <p className="text-[#123042] text-base leading-relaxed mb-6">
                                During our field visit to a CLF in West Bengal, we interacted with members
                                who are actively working to diversify their income by leveraging the region's 
                                abundant bamboo resources. They plan to manufacture and sell broomsticks and have 
                                already procured the necessary machinery. To expand demand, they are exploring partnerships
                                with government departments and local schools that regularly purchase such items.
                                </p> 
                                <p className="text-[#123042] text-base leading-relaxed mb-6"> <strong>Inspiring Wider Community:</strong> 
                                Successful farmers have become role models, inspiring others to adopt improved practices. There are
                                community-led training sessions where experienced farmers mentor peers, fostering collective growth. 
                            </p>

          </div>

        
      </section>
    </div>
  );
};

export default ResourceDetailIFC;
