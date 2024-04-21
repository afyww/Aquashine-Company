import { useState } from "react";

function Contactcard() {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
    });

    const [notification, setNotification] = useState({
        show: false,
        type: 'success', // or 'error'
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form data
        if (!formData.name || !formData.message) {
            setNotification({
                show: true,
                type: 'error',
                message: 'Please fill in all required fields',
            });

            setTimeout(() => {
                setNotification({
                    show: false,
                    type: 'error',
                    message: '',
                });
            }, 5000);

            return;
        }

        // Construct the WhatsApp link
        const phone_number = '6289501899763'; 
        const whatsappMessage = `Name: ${formData.name}Message: ${formData.message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappLink = `https://wa.me/${phone_number}?text=${encodedMessage}`;

        // Open the WhatsApp link in a new tab
        window.open(whatsappLink, '_blank');

        setNotification({
            show: true,
            type: 'success',
            message: 'Message sent via WhatsApp',
        });

        // Clear the form data after submission
        setFormData({
            name: '',
            message: '',
        });

        // Hide notification after 5 seconds (adjust the time as needed)
        setTimeout(() => {
            setNotification({
                show: false,
                type: 'success',
                message: '',
            });
        }, 5000);
    };

    return (
        <div className="p-4 xl:p-8">
            <form onSubmit={handleSubmit}>
                <div className="space-y-1">
                    <div className="space-y-2">
                        <div className="">
                            <h1 className="text-xl lg:text-2xl xl:text-4xl 2xl:text-7xl text-left text-emerald-700 font-semibold">
                                Get In Touch With Us
                            </h1>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-black text-left">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full py-2 px-3 bg-gray-300 rounded-md"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <label className="text-sm xl:text-lg 2xl:text-xl text-extralight text-black text-left">Your Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="8"
                            className="w-full py-2 px-3 bg-gray-300 rounded-md"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>
                    <div className="border-b-2 border-emerald-400 w-fit">
                        <button
                            type="submit"
                            className="text-sm flex gap-2 xl:text-xl 2xl:text-3xl text-emerald-600"

                        >Send Message on WhatsApp
                            <svg className='my-auto bg-emerald-400 p-1 h-6 w-6 xl:w-7 xl:h-8 2xl:h-10 2xl:w-9' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
            {notification.show && (
                <div
                    className={`mt-4 p-3 ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                        } text-white`}
                >
                    {notification.message}
                </div>
            )}
        </div>
    );
}

export default Contactcard
