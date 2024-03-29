import { cookies } from 'next/headers';
import { Suspense } from 'react';

// Assets
import { DownloadIcon, GithubIcon, TwitterIcon } from 'components/Icons';

// Components
import ThemePicker, { Theme } from './subcomponents/ThemePicker';
import LanguagePicker from './subcomponents/LanguagePicker';
import Status from './subcomponents/Status';
import FeedbackButton from './subcomponents/FeedbackButton';

export default function Footer() {
	const cookieStore = cookies();
	const theme = cookieStore.get('theme');

	return (
		<footer className="w-full flex flex-col items-center justify-center gap-y-10 gap-x-12 px-wrapper border-t border-t-gray-400 dark:border-t-dark-gray-100 bg-gray-300 dark:bg-dark-gray-400 pt-12 pb-12">
			<div className="flex flex-col items-start justify-start w-full gap-12">
				<div className="flex flex-col md:flex-row flex-wrap gap-y-12 items-start justify-between gap-x-4 w-full relative">
					{/* Column1 - officia title and PC buttons holder */}
					<div className="flex flex-1 flex-col w-full md:w-fit lg:relative lg:top-0 lg:left-0 lg:self-stretch justify-between min-w-[25%] gap-y-4">
						{/* officia title */}
						<div className="flex flex-1 flex-col items-center md:items-start justify-start gap-y-4">
							<div className="flex flex-row items-center justify-start gap-x-5">
								<a href="/" className="font-title text-2xl text-text-100">
									officia
								</a>
								<div className="h-6 w-0 border-r border-gray-400 dark:border-dark-gray-100 rounded" />
								<a
									href="https://github.com/theduardomaciel/officia"
									target="_blank"
								>
									<GithubIcon />
								</a>
								<a href="https://twitter.com/appofficia" target="_blank">
									<TwitterIcon />
								</a>
							</div>
							<p className="flex-1 text-sm text-text-100 text-center md:text-left whitespace-normal break-words">
								Copyright @ 2023 | feito com ❤️ por @theduardomaciel
							</p>
						</div>
						{/* PC buttons holder */}
						<div className="flex-row items-center justify-start gap-x-6 hidden lg:flex">
							<ThemePicker initialTheme={theme?.value as Theme} />
							<LanguagePicker />
						</div>
					</div>
					{/* Sections */}
					<div className="flex flex-col md:flex-row items-start justify-end gap-12">
						<Section
							title="Ajuda"
							links={[
								{
									title: 'Central de Ajuda',
									href: '/help'
								},
								{
									title: 'Fale Conosco',
									href: '/contact'
								},
								{
									title: 'Resgatar Código',
									href: '/redeem'
								}
							]}
						/>
						<Section
							title="Legal"
							links={[
								{
									title: 'Política de Privacidade',
									href: '/privacy'
								},
								{
									title: 'Termos de Uso',
									href: '/terms'
								},
								{
									title: 'Termos de Compra',
									href: '/purchase-terms'
								}
							]}
						/>
						<Section title="Baixe o App">
							<DownloadIcon />
						</Section>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center w-full gap-y-6 lg:hidden">
					<div className="flex flex-row items-center justify-between w-full">
						<ThemePicker />
						<LanguagePicker />
					</div>
					<FeedbackButton />
				</div>
				<div className="w-full flex items-center justify-center lg:justify-between">
					<FeedbackButton className="w-fit lg:flex hidden" />
					<Suspense fallback={<></>}>
						<Status />
					</Suspense>
				</div>
			</div>
		</footer>
	);
}

interface SectionProps {
	title: string;
	links?: {
		title: string;
		href: string;
	}[];
	children?: React.ReactNode;
}

const Section = ({ title, links, children }: SectionProps) => {
	return (
		<ul className="flex flex-col items-start justify-start gap-y-5">
			<li key={'sectionTitle'} className="uppercase font-title text-sm mb-1 text-text-100">
				{title}
			</li>
			{links &&
				links.map((link, index) => (
					<a href={link.href} key={index.toString()}>
						<li className="mr-12 font-regular text-sm cursor-pointer text-text-100 hover:text-text-200 transition-colors">
							{link.title}
						</li>
					</a>
				))}
			{children}
		</ul>
	);
};
