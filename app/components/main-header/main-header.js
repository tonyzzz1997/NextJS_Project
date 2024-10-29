import classes from './main-header.module.css'
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "@/app/components/main-header/main-header-background";
import {Fragment} from "react";
import {retry} from "next/dist/compiled/@next/font/dist/google/retry";
export default function MainHeader() {

    return <>
        <MainHeaderBackground/>
        <header className={classes.header}>
            <Link className={classes.logo} href="/public">
                <Image src={logoImg} alt="logo" priority={true}/>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>


}