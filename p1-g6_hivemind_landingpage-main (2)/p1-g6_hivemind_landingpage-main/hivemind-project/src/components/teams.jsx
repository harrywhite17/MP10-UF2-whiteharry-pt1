export default function TeamsSection() {
    const teamMembers = [
        { name: 'Radostin Ivanov', role: 'CEO', imageUrl: 'path/to/image1.jpg', description: 'Desenvolupador principal del projecte, amb estudis de SMX i DAM' },
        { name: 'Gerard Moreno', role: 'CTO', imageUrl: 'path/to/image2.jpg', description: 'Mantenidor del front end' },
        { name: 'Manel Méndez', role: 'CFO', imageUrl: 'path/to/image3.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc.' },
        { name: 'Harry White', role: 'COO', imageUrl: 'path/to/image4.jpg' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc.' },

    ];

    return (
        <section className="py-12 bg-transparent backdrop-blur-3xl rounded-3xl">
            <div className="container mx-auto px-4 ">
                <h2 className="text-3xl font-semibold text-center mb-8 text-white">El nostre equip</h2>
                <div className="flex flex-wrap justify-center ">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-white/20 backdrop-blur-3xl rounded-3xl shadow-lg p-6 text-center ">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-black">{member.role}</p>
                                <p className="text-black mt-2">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}