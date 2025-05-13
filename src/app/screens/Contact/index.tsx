import Button from "@/app/components/Button";
import Paragraph from "@/app/components/Paragraph";
import { Mail } from "lucide-react";

const Contact = () => {
    return (
        <div id="contact" className="scroll-mt-24 max-w-5xl mx-auto mt-[100px] md:mt-[120px] text-center flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold">Vamos conversar?</h2>
            <Paragraph text="Me chama para tirar ideias do papel ou melhorar seu produto." className="mb-4" />
            <Button icon={Mail} link="mailto:wellingtonsantos.developer@gmail.com" label="Envie-me um email!"/>
        </div>
    )
}

export default Contact;