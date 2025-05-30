import Button from "./button";
import Copy from "./copy";

export default function Home() {
    return (
        <div className="home">
            <Copy>
                <h1>Memory</h1>
            </Copy>
            <Copy>
                <h1>Drop</h1>
            </Copy>
            <div className="hero-text">
                <Copy>
                    <p>Memory Drop lets you send vibes, secrets, or goals to yourself, delivered exactly when you want. Craft your message, pick a date, and let it hit your inbox like a perfectly timed beat.</p>
                </Copy>
                <Button />
            </div>
        </div>
    )
}