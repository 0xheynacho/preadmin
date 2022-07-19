import { ReactNode } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import AuthenticatedLayout from "../components/Unknown/AuthenticatedLayout";
import InfoCard from "../components/Unknown/InfoCard/InfoCard";
import CurrentSubject from "../components/Dashboard/CurrentSubject";
import ConversionRates from "../components/Dashboard/ConversionRates";
import CurrentVisits from "../components/Dashboard/CurrentVisits";
import NewsUpdate from "../components/Dashboard/NewsUpdate";
import OrderTimeline from "../components/Dashboard/OrderTimeline";

import { dashboardData } from "../assets/mocks/data/dashboard";

const WebsiteVisits = dynamic(
  () => import("../components/Dashboard/WebsiteVisits"),
  {
    ssr: false,
  }
);

export default function Dashboard() {
  return (
    <Box>
      <Head>
        <title>Dashboard</title>
      </Head>
	<div  class="casa">
		<div style="text-align: center; color:black; width: 100%; opacity:2!important; margin-top:5%;" >
			<h1 style="margin-bottom: 1%; margin-top: 3%;  font-family: 'Open Sans', sans-serif;" >Presupuesto de Diseño para   tu casa</h1>
			<h2 style= color:black;font-family: 'Open Sans', sans-serif;" >Averiguá que Tamaño y costo Tendrá Tu Casa</h2>
			<h2 style="margin-bottom: 1%;color:black;font-family: 'Open Sans', sans-serif;">Completando estos simples datos</h2>
			<h2 style="color: black;font-family: 'Open Sans', sans-serif;">Obtén el precio de inmediato y descarga el PDF</h2>
			<button   style="background-color: black ; color:white ; margin-top: 3%;" ><a href="#Presupuesto" style="color: white;"> Calcular  Presupusto</a>
			</button>
			</div>
		</div>
      
    </Box>
  );
}

Dashboard.getLayout = (page: ReactNode) => (
  <AuthenticatedLayout title="Hi, Welcome back">{page}</AuthenticatedLayout>
);
