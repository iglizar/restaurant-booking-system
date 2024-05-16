
export const Spinner = () => {
	return (
		<svg
			className="animate-spin h-8 w-8 text-gray-700"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 50 50"
		>
			<circle
				className="opacity-25"
				cx="25"
				cy="25"
				r="20"
				stroke="currentColor"
				strokeWidth="4"
				fill="none"
			></circle>
			<circle
				className="opacity-75"
				cx="25"
				cy="25"
				r="20"
				stroke="currentColor"
				strokeWidth="4"
				strokeLinecap="round"
				fill="none"
				strokeDasharray="31.415, 31.415"
				strokeDashoffset="0"
				style={{ animation: 'dash 1.5s ease-in-out infinite' }}
			></circle>
			<style>{`
        @keyframes dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
          }
          100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
          }
        }
      `}</style>
		</svg>
	);
};