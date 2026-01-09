import { Link } from "react-router-dom";

const ResourceDetail = () => {
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
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=500&auto=format&fit=crop"
            alt="Prayoga Institute of Education Research - Kriya"
            className="w-full md:w-64 h-48 object-cover rounded-lg"
          />

          {/* Title Section */}
          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-500 mb-2">
              Tobey Marshall | 4th July 2025
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-black leading-snug">
              Prayoga Institute of Education Research - Kriya
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Kriya Programme */}
          <div>
            <h2 className="text-lg font-bold text-black mb-3">
              Kriya Programme
            </h2>
            <p className="text-[#123042] leading-relaxed mb-4">
              The Kriya programme fosters experiential learning by engaging students in hands-on activities that nurture scientific temperament and higher-order thinking skills. It is targeted towards students from Grade 6 to Grade 10 across schools in Karnataka.
            </p>
            <p className="text-[#123042] text-base leading-relaxed mb-6">
              The programme provides science lab facilities, a teaching curriculum, teacher training, online academic support and coordination, and knowledge and practice sharing among teachers and experts. Teachers are empowered with advanced pedagogical strategies, subject expertise, and effective classroom management techniques to enhance their teaching capabilities.
            </p>
            <p className="text-[#123042] text-base leading-relaxed mb-6">
              For CSR Impact Assessment compliance, VIC is evaluating the impact of the Kriya programme on students' interest and learning in science, teachers' teaching experiences, and the school ecosystem's role in supporting and encouraging sustain experiential learning.
            </p>
          </div>

          {/* On-Ground Story */}
          <div>
            <h2 className="text-lg font-bold text-black mb-3">
              On-Ground Story
            </h2>
            <p className="text-[#123042] leading-relaxed mb-4">
              Ms. Anjana* (name changed), the science teacher, shared that students are highly enthusiastic about attending lab sessions, eagerly engaging in experiments, and developing a strong interest in science—sometimes even at the expense of other subjects. Speaking about the impact of learning science on other subjects, she observed that students have started approaching other subjects in the same way they approach Kriya sessions. She noted that beyond Kriya, students pursue science learning through tuition classes, reading science books from the library, watching videos online, and exploring concepts by observing their surroundings and asking follow-up questions during sessions. For example, students take photographs of insects and elements of nature and study them in detail.
            </p>
            <p className="text-[#123042] text-base leading-relaxed mb-6">
              Interactions with students indicated that hands-on experiments have deepened their understanding of scientific concepts and fostered a scientific temperament, enabling them to question and overcome prevalent myths and superstitions. Students expressed a clear preference for experiential learning in the lab over rote textbook study. The Kriya project has made science experiments more accessible and enjoyable, transforming the laboratory into a vibrant and engaging learning space.
            </p>
          </div>

          

        </div>
      </section>
    </div>
  );
};

export default ResourceDetail;
