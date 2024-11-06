import FooterList from "./FooterList.jsx";
import FooterCopyright from "./FooterCopyright.jsx";

export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col items-center text-green-900">
                <FooterList/>
                <FooterCopyright/>
            </div>
        </footer>

    );
}