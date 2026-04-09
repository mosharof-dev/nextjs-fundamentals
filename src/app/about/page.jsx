import Image from "next/image";

const AboutPage = () => {
    return (
        <div>
            <h1>About Section</h1>
            <Image
                src="/don.png"
                alt="About Us"  
                width={600}
                height={400}
                className="rounded-full shadow-md mt-4"
            />  
            {/* <Image
                src="https://cdn.prod.website-files.com/6706802514ffa549d0bf0b8a/6853f06215cbd42169823b67_React_js_vs_next_js_which_one_to_choose_-p-2000.webp"
                alt="Our Team"
                width={600}
                height={400}
                className="rounded-full shadow-md mt-4"
            /> */}
            <p className="mt-4 text-lg text-gray-700">
                Welcome to the About Page! This is where you can learn more about our mission, values, and the team behind our project. We are dedicated to providing high-quality content and resources to help you succeed in your endeavors. Our team consists of passionate individuals who are experts in their respective fields, and we are committed to sharing our knowledge and insights with you. Thank you for visiting our About Page, and we hope you find it informative and inspiring!
            </p>
        </div>
    );
};

export default AboutPage;