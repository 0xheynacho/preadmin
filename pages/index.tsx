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
   <h1>si</h1>
		  
<div>
  <div style={{height: '0px'}} aria-hidden="true" className="wp-block-spacer" />
  <h1 style={{margin: '5%', color: 'black', textAlign: 'center'}} id="Presupuesto">Completa estos simples datos</h1>
  <div className="wp-block-formcraft-embed-form"><div className="uniq-62d16bd62bbbb formcraft-css form-live align-center">
      <div className="form-cover">
        <form className="fc-form fc-form-6 align- spin- dont-submit-hidden- disable-enter- label-placeholder field-border-visible frame-hidden save-form-true remove-asterisk-true icons-hide-false field-alignment-center options-fade" style={{width: '75%', color: '#666666', fontSize: '110%', background: 'white'}}>
          <div className="form-page form-page-0 active" data-index={0}>
            <div className="form-page-content     " style={{backgroundColor: 'white'}} />
            <div className="form-element-html"><div><div className="heading-cover field-cover "><div style={{textAlign: 'center', fontSize: '1.4em', color: '#ff7f00'}} className="bold-false"><span>¿Qué Tipo de Cocina Te Gusta Más?</span></div>
                </div></div></div>
          </div>
          <div style={{width: '100%'}} className="form-element form-element-field3 options-false index-false form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
            <div className="form-element-html"><div><div className="images-true checkbox-cover field-cover"><span className="sub-label-false"><span className="main-label" /><span className="sub-label" /></span><div><span className="error" /><label className="active"><img alt="" src="./index_files/cocina-1-e1656410736733.png" />
                      <input defaultChecked id="cocina1" type="radio" data-is-required="true" name="field3[]" defaultValue={8} className="validation-lenient" /><span><span> Simple</span></span></label><label><img alt="" src="./index_files/cocina-con-isla-2-e1656410518451.png" />
                      <input id="cocina2" type="radio" data-is-required="true" name="field3[]" defaultValue={14} className="validation-lenient" /><span><span> Con Isla</span></span></label><label><img alt="" src="./index_files/cocina-comedor-isla-1-e1656410695546.png" />
                      <input id="cocina3" type="radio" data-is-required="true" name="field3[]" defaultValue={26} className="validation-lenient" /><span><span> Isla y Comedor</span></span></label></div></div></div></div>
          </div>
        </form></div>		
    </div>	
  </div>
</div>

		  
							  
		  
      <Grid container spacing={3}>
        {dashboardData.infoCards.map((data, i) => (
          <Grid key={i} item xs={12} sm={6} md={3}>
            <InfoCard {...data} />
          </Grid>
        ))}

        <Grid item xs={12} md={6} lg={8}>
          <WebsiteVisits {...dashboardData.websiteVisits} />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CurrentSubject {...dashboardData.currentSubject} />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <ConversionRates {...dashboardData.conversionRates} />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CurrentVisits {...dashboardData.currentVisits} />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <NewsUpdate {...dashboardData.newsUpdate} />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <OrderTimeline {...dashboardData.orderTime} />
        </Grid>
      </Grid>
    </Box>
	  
	  
  );
}

Dashboard.getLayout = (page: ReactNode) => (
  <AuthenticatedLayout title="Hi, Welcome back">{page}</AuthenticatedLayout>
);
