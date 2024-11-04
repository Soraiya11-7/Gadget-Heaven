
const Footer = () => {
    return (
        <div className="container mx-auto border border-red-500">
            <footer className="container mx-auto py-24 w-[80%] border border-red-500 ">
                <h2 className="text-center text-3xl font-bold text-[#09080F] mb-3">Gadget Heaven</h2>
                <p className="text-center text-base text-[#09080F99] font-medium mb-8">Leading the way in cutting-edge technology and innovation.</p>
                <hr />
                <div className="mt-8 flex items center justify-between container mx-auto w-[50%] gap-6 text-center">
                    <div>
                        <h3 className="text-lg text-[#09080F] font-bold mb-4">Services</h3>
                        <ul className="text-base font-normal text-[#09080F99] text-center">
                            <li className="mb-3">Product Support</li>
                            <li className="mb-3">Order Tracking</li>
                            <li className="mb-3">Shipping & Delivery</li>
                            <li>Returns</li>
                        </ul>
                       
                    </div>
                    <div>
                        <h3 className="text-lg text-[#09080F] font-bold mb-4">Company</h3>
                        <ul className="text-base font-normal text-[#09080F99] text-center">
                            <li className="mb-3"> About Us</li>
                            <li className="mb-3">Careers</li>
                            <li>Contact</li>
                        </ul>
                       
                    </div>
                    <div>
                        <h3 className="text-lg text-[#09080F] font-bold mb-4">Legal</h3>
                        <ul className="text-base font-normal text-[#09080F99] text-center">
                            <li className="mb-3">Terms of Service</li>
                            <li className="mb-3">Privacy Policy</li>
                            <li>Cookie Policy</li>
                           
                        </ul>
                       
                    </div>

                </div>

            </footer>
        </div>
    );
};

export default Footer;