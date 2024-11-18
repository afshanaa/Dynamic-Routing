


import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Array of teacher information
  const teachers = [
    {
      id: 1,
      name: "Mr. Ahmed",
      subject: "Mathematics",
      image:  "/images/teacher2.jpg",
      email: "ahmed.maths@test.com",
    },
    {
      id: 2,
      name: "Ms. Sara",
      subject: "Physics",
      image: "/images/teacher2.jpg",// Replace with actual image paths
      email: "sara.physics@test.com",
    },
    {
      id: 3,
      name: "Mr. Kamran",
      subject: "Chemistry",
      image: "/images/teacher3.jpg", // Replace with actual image paths
      email: "kamran.chem@test.com",
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-gray-800 text-center bg-gray-300 p-20">
          Dynamic Routing
        </h1>

        <div className="min-h-screen bg-gray-600 p-10">
          <h1 className="text-4xl font-bold text-gray-100 text-center">Teachers</h1>
          <p className="text-center text-gray-600 mt-4">
          "Welcome to the Teachers Portal!
Here, you can explore detailed profiles of our dedicated teachers,
 their areas of expertise, and how they contribute to fostering an 
 enriching learning environment. Dive in to learn more and connect 
 with the educators shaping futures!"</p>

          {/* Teachers List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                {/* Teacher Image */}
                <div className="w-full h-40 relative">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>

                {/* Teacher Info */}
                <div className="mt-4">
                  <h2 className="text-xl font-bold text-gray-800">{teacher.name}</h2>
                  <p className="text-gray-600">Subject: {teacher.subject}</p>
                  <p className="text-gray-600">Email: {teacher.email}</p>
                  <Link
                    href={`/teachers/${teacher.id}`} // Example for dynamic routing
                    className="text-blue-500 underline mt-2 block"
                  >
                    View Profile
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}



























// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//     <div>
//       <h1 className=" text-4xl font-bold text-gray-800 text-center  bg-gray-300 p-20">Daynamic Routing</h1>
      
//     <div className="min-h-screen bg-gray-100 p-10">
//       <h1 className="text-2xl font-bold text-gray-800 text-center">Teachers</h1>
//       <p className="text-center text-gray-600 mt-4">
//         Welcome to the Teachers page! Here, you can find information about teachers.
//       </p>
//     </div>
    


//     </div>
//     </>
//   );
// }
