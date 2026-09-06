"use client";

import { ArrowUp2 } from "iconsax-react";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		function onScroll() {
			setVisible(window.scrollY > 300);
		}
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<button
			onClick={scrollToTop}
			aria-label="Scroll to top"
			className={[
				"fixed bottom-24 cursor-pointer right-4 z-640 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-custom-purple backdrop-blur-xl transition-all duration-300 hover:bg-custom-purple hover:text-white md:bottom-6 md:right-6",
				"border border-custom-purple/30 shadow-[0_4px_20px_rgba(0,0,0,0.10),0_1px_0_rgba(255,255,255,0.9)_inset] hover:border-custom-purple",
				visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none",
			].join(" ")}
		>
			<ArrowUp2 size={18} variant="Bold" color="currentColor" />
		</button>
	);
}
