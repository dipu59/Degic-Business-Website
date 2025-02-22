import PropTypes from "prop-types";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = ({ companyName, links, socialLinks, year }) => {
    return (
        <footer className="bg-black text-white py-10 md:py-18 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
            {/* Logo */}
            <div className="mb-6 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold flex items-center">
                <span className="bg-red-600 text-white px-2 py-1 rounded-md mr-2">D</span>
                {companyName}
            </h1>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-[#FFFFFF80]">
            {Object.entries(links).map(([category, items]) => (
                <div key={category}>
                <h2 className="text-white font-semibold">{category}</h2>
                <ul>
                    {items.map((item, index) => (
                    <li key={index} className="hover:text-gray-200 py-0 md:py-1 cursor-pointer">{item}</li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">Copyright © {companyName} {year}</p>

            {/* Social Icons */}
            <div className="flex space-x-4">
            {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="text-white hover:text-gray-400" />
                </a>
            )}
            {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="text-white hover:text-gray-400" />
                </a>
            )}
            {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="text-white hover:text-gray-400" />
                </a>
            )}
            </div>
        </div>
        </footer>
    );
    };
    Footer.propTypes = {
    companyName: PropTypes.string.isRequired,
    links: PropTypes.object.isRequired,
    socialLinks: PropTypes.shape({
        facebook: PropTypes.string,
        instagram: PropTypes.string,
        twitter: PropTypes.string,
    }).isRequired,
    year: PropTypes.number.isRequired,
    };

    // Example Usage
    const footerData = {
    companyName: "degic",
    year: new Date().getFullYear(),
    links: {
        Home: ["Become Affiliate", "Go Unlimited", "Services"],
        Products: ["Design Systems", "Themes & Templates", "Mockups", "Presentations", "Wireframes Kits", "UI Kits"],
        Legals: ["License", "Refund Policy", "About Us", "Contacts"],
        Blog: ["Business Stories", "Digital Store", "Learning", "Social Media"],
    },
    socialLinks: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
    },
    };

    export default function App() {
        return <Footer {...footerData} />;
        }
    