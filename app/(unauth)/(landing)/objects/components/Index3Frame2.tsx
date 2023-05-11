import { cn } from 'lib/utils';

export default function Index3Frame2({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				'h-fit rounded-lg-2 bg-gray-300 dark:bg-dark-gray-200 shadow-[-2px_4px_50px_10px_rgba(161,_161,_170,_0.25)] dark:shadow-[-2px_4px_50px_10px_rgba(0,0,0,_0.25)] w-[20.31rem] flex flex-col p-[1.25rem] box-border items-start justify-start gap-[1.56rem] text-left text-[1.13rem] text-[var(--neutral)] font-raleway self-start',
				className
			)}
		>
			<div className="flex flex-col items-start justify-start">
				<div className="flex flex-col items-start justify-start gap-[0.31rem]">
					<DocumentIcon />
					<div className="flex flex-col items-start justify-start gap-[0.31rem]">
						<b className="relative leading-[125%]">
							O orçamento foi criado com sucesso.
						</b>
						<div className="relative text-[0.75rem] leading-[125%] font-inter text-text-100">
							O arquivo agora pode ser compartilhado com o cliente.
						</div>
					</div>
				</div>
			</div>
			<div className="flex w-full flex-row items-start justify-start gap-[0.63rem] text-center text-[0.75rem] font-inter">
				<div className="flex-1 rounded-md bg-gray-200 dark:bg-dark-gray-100 flex flex-row py-[0.63rem] px-[0rem] items-center justify-center">
					<div className="relative font-medium">Voltar</div>
				</div>
				<div className="flex-1 rounded-lg bg-green flex flex-row py-[0.63rem] px-[0rem] h-full items-center justify-center text-left text-white">
					<div className="relative leading-[125%] font-semibold">Visualizar</div>
				</div>
			</div>
		</div>
	);
}

function DocumentIcon() {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_1991_4529"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="28"
				height="28"
			>
				<rect width="28" height="28" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_1991_4529)">
				<path
					d="M9.33333 19.8333H15.1667C15.4972 19.8333 15.7743 19.7215 15.9979 19.4979C16.2215 19.2743 16.3333 18.9972 16.3333 18.6667C16.3333 18.3361 16.2215 18.059 15.9979 17.8354C15.7743 17.6118 15.4972 17.5 15.1667 17.5H9.33333C9.00278 17.5 8.72569 17.6118 8.50208 17.8354C8.27847 18.059 8.16667 18.3361 8.16667 18.6667C8.16667 18.9972 8.27847 19.2743 8.50208 19.4979C8.72569 19.7215 9.00278 19.8333 9.33333 19.8333ZM9.33333 15.1667H18.6667C18.9972 15.1667 19.2743 15.0549 19.4979 14.8313C19.7215 14.6076 19.8333 14.3306 19.8333 14C19.8333 13.6694 19.7215 13.3924 19.4979 13.1687C19.2743 12.9451 18.9972 12.8333 18.6667 12.8333H9.33333C9.00278 12.8333 8.72569 12.9451 8.50208 13.1687C8.27847 13.3924 8.16667 13.6694 8.16667 14C8.16667 14.3306 8.27847 14.6076 8.50208 14.8313C8.72569 15.0549 9.00278 15.1667 9.33333 15.1667ZM9.33333 10.5H18.6667C18.9972 10.5 19.2743 10.3882 19.4979 10.1646C19.7215 9.94097 19.8333 9.66389 19.8333 9.33333C19.8333 9.00278 19.7215 8.72569 19.4979 8.50208C19.2743 8.27847 18.9972 8.16667 18.6667 8.16667H9.33333C9.00278 8.16667 8.72569 8.27847 8.50208 8.50208C8.27847 8.72569 8.16667 9.00278 8.16667 9.33333C8.16667 9.66389 8.27847 9.94097 8.50208 10.1646C8.72569 10.3882 9.00278 10.5 9.33333 10.5ZM5.83333 24.5C5.19167 24.5 4.64236 24.2715 4.18542 23.8146C3.72847 23.3576 3.5 22.8083 3.5 22.1667V5.83333C3.5 5.19167 3.72847 4.64236 4.18542 4.18542C4.64236 3.72847 5.19167 3.5 5.83333 3.5H22.1667C22.8083 3.5 23.3576 3.72847 23.8146 4.18542C24.2715 4.64236 24.5 5.19167 24.5 5.83333V22.1667C24.5 22.8083 24.2715 23.3576 23.8146 23.8146C23.3576 24.2715 22.8083 24.5 22.1667 24.5H5.83333ZM5.83333 22.1667H22.1667V5.83333H5.83333V22.1667Z"
					fill="var(--neutral)"
				/>
			</g>
		</svg>
	);
}
