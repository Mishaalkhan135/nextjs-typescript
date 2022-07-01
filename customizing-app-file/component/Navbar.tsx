import Link from "next/link";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import type { NextComponentType, NextPageContext } from "next";
interface Props {
	toggleTheme: string;
}
const Navbar: NextComponentType<NextPageContext, {}, Props> = (
	props: Props
) => {
	const { toggleTheme, theme }: any = useContext(ThemeContext);
	const newThemeName = theme === "dark" ? "light" : "dark";
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				padding: 15,
				backgroundColor: "lightblue",
			}}
		>
			<div style={{ fontSize: 30 }}>MY Website</div>
			<div style={{ marginTop: 13 }}>
				<Link href='/'>
					<a style={{ marginRight: 15 }}>Home</a>
				</Link>
				<Link href='/about'>
					<a style={{ marginRight: 15 }}>About</a>
				</Link>
				<Link href='/contact'>
					<a style={{ marginRight: 15 }}>Conatct</a>
				</Link>
			</div>
			<button onClick={toggleTheme}>Set {newThemeName} theme</button>
		</div>
	);
};
export default Navbar;
