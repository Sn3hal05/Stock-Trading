import React from 'react';

const TeamMembers = () =>{ 
    const team =[
        {
            name: "Nikhil Kamath",
            role: "Co-founder & CFO",
            img: "../Media/images/Nikhil.jpg",
            bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."
        },
        {
            name: "Dr. Kailash Nadh",
            role: "CTO",
            img: "../Media/images/Kailash.jpg",
            bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day."
        },
        {
            name: "Venu Madhav",
            role: "CEO",
            img: "../Media/images/Venu.jpg",
            bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha."
        },
        {
            name: "Seema Patil",
            role: "Director",
            img: "../Media/images/Seema.jpg",
            bio: "Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast."
        },
        {
            name: "Karthik Pangappa",
            role: "Chief of Education",
            img: "../Media/images/Karthik.jpg",
            bio: "Karthik 'Guru' Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography."
        },
        {
            name: "Austin Prakash",
            role: "Director Strategy",
            img: "../Media/images/Austin.jpg",
            bio: "Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches."
        },
    ];

    return(
        <div className="container py-5">
            <h2 className="text-center mb-5">Our Leadership</h2>
            <div className="row">
                {
                    team.map((member ,index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 text-center mb-4">
                            <img
                            src={member.img}
                            alt={member.name}
                            className="rounded-circle mb-4"
                            style={{width:"250px", height:"250px",objectFit:"cover"}}
                            
                            />
                            <h5>{member.name}</h5>
                            <p className="text-muted">{member.role}</p>

                            <details className="mb-5">
                                <summary className="text-muted">Bio</summary>
                                <p>{member.bio}</p>
                            </details>

                        </div>

                    ))
                }

            </div>
            

        </div>
    );


}
export default TeamMembers;