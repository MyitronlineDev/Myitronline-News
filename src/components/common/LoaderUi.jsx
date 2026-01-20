
export default function LoaderUi() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">

            {/* Logo */}
            <div className="w-20 h-20 mb-4 animate-pulse">
                <img
                    src="/logo.jpeg" // 🔁 your Myitronline logo path
                    alt="Myitronline loading"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Headline-style message */}
            <h2 className="text-sm font-semibold text-gray-800 tracking-wide">
                Fetching the latest headlines…
            </h2>

            {/* Subtle sarcasm */}
            <p className="mt-2 text-xs text-gray-500 italic">
                Journalism takes a moment. We promise it’s worth the wait.
            </p>

            {/* Animated dots */}
            <div className="mt-3 flex gap-1 text-gray-400 text-lg">
                <span className="animate-bounce delay-0">.</span>
                <span className="animate-bounce delay-150">.</span>
                <span className="animate-bounce delay-300">.</span>
            </div>
        </div>
    );
}
