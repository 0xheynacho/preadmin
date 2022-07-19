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

      <Grid container spacing={3}>
        {dashboardData.infoCards.map((data, i) => (
          <Grid key={i} item xs={12} sm={6} md={3}>
            <InfoCard {...data} />
          </Grid>
        ))}


        
        	<div  data-identifier="field6" data-index="1" style="width: 100%" class="even form-element form-element-field6 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
							<div class="form-element-html"><div><div  class="heading-cover field-cover "><div style="text-align: center; font-size: 1.4em;color: #ff7f00" class="bold-false"><span>¿Qué Tipo de Cocina Te Gusta Más?</span></div>
							<input type="hidden" data-field-id="field6" name="field6[]" value="¿Qué Tipo de Cocina Te Gusta Más?"></div></div></div>
							
						</div><div data-identifier="field3" data-index="2" style="width: 100%" class="form-element form-element-field3 options-false index-false form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
							<div class="form-element-html"><div><div class="images-true checkbox-cover field-cover"><span class="sub-label-false"><span class="main-label"></span><span class="sub-label"></span></span><div data-placement="right" data-toggle="tooltip" tooltip="" data-trigger="hover" data-html="true" data-original-title=""><span class="error"></span><label style="width:" class="active"><img alt="" src="./index_files/cocina-1-e1656410736733.png" class="lazyloaded" data-ll-status="loaded"><noscript><img alt="" src="./index_files/cocina-1-e1656410736733.png"></noscript>
								<input id="cocina1" checked data-field-id="field3" type="radio" data-is-required="true" name="field3[]" value="8" class="validation-lenient"  ><span><span> Simple</span></span></label><label style="width:" class=""><img alt="" src="./index_files/cocina-con-isla-2-e1656410518451.png" class="lazyloaded" data-ll-status="loaded"><noscript><img alt="" src="./index_files/cocina-con-isla-2-e1656410518451.png"></noscript>
									<input id="cocina2" data-field-id="field3" type="radio" data-is-required="true" name="field3[]" value="14" class="validation-lenient" ><span><span> Con Isla</span></span></label><label style="width:" class=""><img alt="" src="./index_files/cocina-comedor-isla-1-e1656410695546.png" class="lazyloaded" data-ll-status="loaded"><noscript><img alt="" src="./index_files/cocina-comedor-isla-1-e1656410695546.png"></noscript>
										<input id="cocina3" data-field-id="field3" type="radio" data-is-required="true" name="field3[]" value="26" class="validation-lenient" ><span><span> Isla y Comedor</span></span></label></div></div></div></div>
							  

        
        
      </Grid>
    </Box>
  );
}

Dashboard.getLayout = (page: ReactNode) => (
  <AuthenticatedLayout title="Hi, Welcome back">{page}</AuthenticatedLayout>
);
