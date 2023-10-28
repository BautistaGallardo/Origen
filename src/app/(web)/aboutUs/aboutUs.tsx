import settings from "../../../../settings.json";

export default function About_us() {
    return (
        <main className="bg-Custm_primary flex flex-row h-screenMinusNav  gap-20">
            <div className="w-full flex flex-col items-center">
                <h3 className="text-Custm_secondary font-bold text-lg ">
                    Sobre Nosotros
                </h3>

                <p className="w-4/5 font-nexa text-center text-white">{settings.aboutUs.History}</p>
            </div>
        </main>
    );
}
