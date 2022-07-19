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
		  
		  
		  <div className="wp-block-formcraft-embed-form"><div className="uniq-62d16bd62bbbb formcraft-css form-live align-center">
    <div className="form-cover">
      <form className="fc-form fc-form-6 align- spin- dont-submit-hidden- disable-enter- label-placeholder field-border-visible frame-hidden save-form-true remove-asterisk-true icons-hide-false field-alignment-center options-fade" style={{width: '75%', color: '#666666', fontSize: '110%', background: 'white'}}>
        <div className="form-page form-page-0 active" data-index={0}>
          <div className="form-page-content     " style={{backgroundColor: 'white'}} />
          <div className="form-element-html"><div><div className="heading-cover field-cover "><div style={{textAlign: 'center', fontSize: '1.4em', color: '#ff7f00'}} className="bold-false"><span>¿Qué Tipo de Cocina Te Gusta Más?</span></div>
              </div></div></div>
        </div><div style={{width: '100%'}} className="form-element form-element-field3 options-false index-false form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
          <div className="form-element-html"><div><div className="images-true checkbox-cover field-cover"><span className="sub-label-false"><span className="main-label" /><span className="sub-label" /></span><div><span className="error" /><label className="active"><img alt="" src="./index_files/cocina-1-e1656410736733.png" />
                    <input id="cocina1" type="radio" data-is-required="true" name="field3[]" defaultValue={8} className="validation-lenient" /><span><span> Simple</span></span></label><label><img alt="" src="./index_files/cocina-con-isla-2-e1656410518451.png" />
                    <input id="cocina2" type="radio" data-is-required="true" name="field3[]" defaultValue={14} className="validation-lenient" /><span><span> Con Isla</span></span></label><label><img alt="" src="./index_files/cocina-comedor-isla-1-e1656410695546.png" />
                    <input id="cocina3" type="radio" data-is-required="true" name="field3[]" defaultValue={26} className="validation-lenient" /><span><span> Isla y Comedor</span></span></label></div></div></div></div>
        </div>
        <div data-identifier="field83" data-index={3} style={{width: '100%'}} className="even form-element form-element-field83 options- index- form-element-3 default-false form-element-type- is-required-false -handle">
          <div className="form-element-html">
          </div>
          <div data-identifier="field7" data-index={1} style={{width: '100%'}} className="even form-element form-element-field7 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
            <div className="form-element-html"><div><div style={{backgroundColor: ''}} className="heading-cover field-cover "><div style={{textAlign: 'center', fontSize: '1.7000000000000002em', paddingTop: '', paddingBottom: '', color: '#ff7f00'}} className="bold-false"><span>¿Cuántos Baños Necesitás?</span></div>
                  <input type="hidden" data-field-id="field7" name="field7[]" defaultValue="¿Cuántos Baños Necesitás?" /></div></div></div>
          </div><div data-identifier="field51" data-index={2} style={{width: '33%'}} className="form-element form-element-field51 options-false index-false form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
            <div className="form-element-html"><div><div className="images-false checkbox-cover field-cover"><span className="sub-label-true"><span className="main-label"><span>Toilettes</span></span><span className="sub-label"><p><img src="./index_files/toil-gris.png" className="lazyloaded" data-ll-status="loaded" /><noscript>&lt;img src="./index_files/toil-gris.png"&gt;</noscript></p></span></span><div data-placement="right" data-toggle="tooltip" tooltip data-trigger="hover" data-html="true" data-original-title><span className="error" /><label style={{width: ''}} className><img alt="" />
                      <input id="bToilettes0" defaultChecked data-field-id="field51" type="radio" data-is-required="true" name="field51[]" defaultValue={0} className="validation-lenient" /><span><span>Ninguno</span></span></label><label style={{width: ''}} className><img alt="" />
                      <input id="bToilettes1" data-field-id="field51" type="radio" data-is-required="true" name="field51[]" defaultValue={4} className="validation-lenient" /><span><span>1 </span></span></label><label style={{width: ''}} className><img alt="" />
                      <input id="bToilettes2" data-field-id="field51" type="radio" data-is-required="true" name="field51[]" defaultValue={8} className="validation-lenient" /><span><span>2 </span></span></label><label style={{width: ''}} className="active"><img alt="" />
                      <input id="bToilettes3" data-field-id="field51" type="radio" data-is-required="true" name="field51[]" defaultValue={12} className="validation-lenient" /><span><span>3</span></span></label></div></div></div></div>
          </div><div data-identifier="field53" data-index={3} style={{width: '33%'}} className="even form-element form-element-field53 options-false index-false form-element-3 default-false form-element-type-checkbox is-required-true -handle">
            <div className="form-element-html"><div><div className="images-false checkbox-cover field-cover"><span className="sub-label-true"><span className="main-label"><span>Simple</span></span><span className="sub-label"><p><img src="./index_files/bano.png" className="lazyloaded" data-ll-status="loaded" /><noscript>&lt;img src="./index_files/bano.png"&gt;</noscript></p></span></span><div data-placement="right" data-toggle="tooltip" tooltip data-trigger="hover" data-html="true" data-original-title><span className="error" /><label style={{width: ''}}><img alt="" />
                      <input id="bsimple0" defaultChecked data-field-id="field53" type="radio" data-is-required="true" name="field53[]" defaultValue={0} className="validation-lenient" /><span><span>Ninguno</span></span></label><label style={{width: ''}} className><img alt="" />
                      <input id="bsimple1" data-field-id="field53" type="radio" data-is-required="true" name="field53[]" defaultValue={5} className="validation-lenient" /><span><span>1 </span></span></label><label style={{width: ''}} className="active"><img alt="" />
                      <input id="bsimple2" data-field-id="field53" type="radio" data-is-required="true" name="field53[]" defaultValue={11} className="validation-lenient" /><span><span>2 </span></span></label><label style={{width: ''}} className><img alt="" />
                      <input id="bsimple3" data-field-id="field53" type="radio" data-is-required="true" name="field53[]" defaultValue={26} className="validation-lenient" /><span><span>3</span></span></label></div></div></div></div>
          </div><div data-identifier="field52" data-index={4} style={{width: '33%'}} className="form-element form-element-field52 options-false index-false form-element-4 default-false form-element-type-checkbox is-required-true odd -handle">
            <div className="form-element-html"><div><div className="images-false checkbox-cover field-cover"><span className="sub-label-true"><span className="main-label"><span>Con Ante baño</span></span><span className="sub-label"><p><img src="./index_files/antebano.png" className="lazyloaded" data-ll-status="loaded" /><noscript>&lt;img src="./index_files/antebano.png"&gt;</noscript></p></span></span><div data-placement="right" data-toggle="tooltip" tooltip data-trigger="hover" data-html="true" data-original-title><span className="error" /><label style={{width: ''}} className="active"><img alt="" />
                      <input id="bConAnteb0" defaultChecked data-field-id="field52" type="radio" data-is-required="true" name="field52[]" defaultValue={0} className="validation-lenient" /><span><span>Ninguno</span></span></label><label style={{width: ''}}><img alt="" />
                      <input id="bConAnteb1" data-field-id="field52" type="radio" data-is-required="true" name="field52[]" defaultValue={8} className="validation-lenient" /><span><span>1 </span></span></label><label style={{width: ''}}><img alt="" />
                      <input id="bConAnteb2" data-field-id="field52" type="radio" data-is-required="true" name="field52[]" defaultValue={16} className="validation-lenient" /><span><span>2 </span></span></label><label style={{width: ''}}><img alt="" />
                      <input id="bConAnteb3" data-field-id="field52" type="radio" data-is-required="true" name="field52[]" defaultValue={24} className="validation-lenient" /><span><span>3</span></span></label></div></div></div></div>
          </div>
          <div data-identifier="field9" data-index={1} style={{width: '100%'}} className="even form-element form-element-field9 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
            <div className="form-element-html"><div><div style={{backgroundColor: ''}} className="heading-cover field-cover "><div style={{textAlign: 'center', fontSize: '1.8000000000000003em', paddingTop: '', paddingBottom: '', color: '#ff7f00'}} className="bold-false"><span>¿Comedor para cuántas personas?</span></div>
                  <input type="hidden" data-field-id="field9" name="field9[]" defaultValue="¿Comedor para cuántas personas?" /></div></div></div>
          </div><div data-identifier="field10" data-index={2} style={{width: '100%'}} className="form-element form-element-field10 options-false index-false form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
            <div className="form-element-html"><div><div className="images-true checkbox-cover field-cover"><span className="sub-label-false"><span className="main-label" /><span className="sub-label" /></span><div data-placement="right" data-toggle="tooltip" tooltip data-trigger="hover" data-html="true" data-original-title><span className="error" /><label style={{width: '25%'}}><img alt="" src="https://martinbonari.com/" />
                      <input id="Comedor0" defaultChecked data-field-id="field10" type="radio" data-is-required="true" name="field10[]" defaultValue={0} className="validation-lenient" /><span><span> Sin Comedor</span></span></label><label style={{width: '25%'}} className="active"><img alt="" />
                      <input id="Comedor1" data-field-id="field10" type="radio" data-is-required="true" name="field10[]" defaultValue={13} className="validation-lenient" /><span><span> 6 Personas</span></span></label><label style={{width: '25%'}}><img alt="" />
                      <input id="Comedor2" data-field-id="field10" type="radio" data-is-required="true" name="field10[]" defaultValue={15} className="validation-lenient" /><span><span> 8 Personas</span></span></label><label style={{width: '25%'}}><img alt="" />
                      <input id="Comedor3" data-field-id="field10" type="radio" data-is-required="true" name="field10[]" defaultValue={16} className="validation-lenient" /><span><span> 10 Personas</span></span></label></div></div></div></div>
            <div data-identifier="field11" data-index={1} style={{width: '100%'}} className="even form-element form-element-field11 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
              <div className="form-element-html"><div><div style={{backgroundColor: ''}} className="heading-cover field-cover "><div style={{textAlign: 'center', fontSize: '1.8000000000000003em', paddingTop: '', paddingBottom: '', color: '#ff7f00'}} className="bold-false"><span>¿Living para cuántas personas?</span></div><input type="hidden" data-field-id="field11" name="field11[]" defaultValue="¿Living para cuántas personas?" /></div></div></div>
            </div><div data-identifier="field13" data-index={2} style={{width: '100%'}} className="form-element form-element-field13 options-false index-false form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
              <div className="form-element-html"><div><div className="images-true checkbox-cover field-cover"><span className="sub-label-false"><span className="main-label" /><span className="sub-label" /></span><div data-placement="right" data-toggle="tooltip" tooltip data-trigger="hover" data-html="true" data-original-title><span className="error" /><label style={{width: '25%'}} className="active"><img alt="" src="https://martinbonari.com/" />
                        <input id="living0" defaultChecked data-field-id="field13" type="radio" data-is-required="true" name="field13[]" defaultValue={0} className="validation-lenient" /><span><span> Sin Living</span></span></label><label style={{width: '25%'}}><img alt="" />
                        <input id="living1" data-field-id="field13" type="radio" data-is-required="true" name="field13[]" defaultValue={13} className="validation-lenient" /><span><span> 6 Personas</span></span></label><label style={{width: '25%'}}><img alt="" />
                        <input id="living2" data-field-id="field13" type="radio" data-is-required="true" name="field13[]" defaultValue={18} className="validation-lenient" /><span><span> 8 Personas</span></span></label><label style={{width: '25%'}}><img alt="" />
                        <input id="living3" data-field-id="field13" type="radio" data-is-required="true" name="field13[]" defaultValue={20} className="validation-lenient" /><span><span> 10 Personas</span></span></label></div></div></div></div>
              <div data-identifier="field14" data-index={1} style={{width: '100%'}} className="even form-element form-element-field14 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
                <div className="form-element-html"><div><div style={{backgroundColor: ''}} className="heading-cover field-cover "><div style={{textAlign: 'center', fontSize: '1.7000000000000002em', paddingTop: '', paddingBottom: '', color: '#ff7f00'}} className="bold-false"><span>¿Garaje Para cuántos coches?</span></div><input type="hidden" data-field-id="field14" name="field14[]" defaultValue="¿Garaje Para cuántos coches?" /></div></div></div>
              </div><div data-identifier="field18" data-index={2} style={{width: '100%'}} className="form-element form-element-field18 options-true index-true form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
                <div className="form-element-html"><div><div className="images-true checkbox-cover field-cover"><span className="sub-label-false"><span className="main-label" /><span className="sub-label" /></span><div data-placement="right" data-toggle="tooltip" tooltip data-trigger="hover" data-html="true" data-original-title><span className="error" /><label style={{width: '25%'}}><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/NADA-e1656413596486.png" /><noscript>&lt;img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/NADA-e1656413596486.png"&gt;</noscript>
                          <input id="g0" defaultChecked data-field-id="field18" type="radio" data-is-required="true" name="field18[]" defaultValue={0} className="validation-lenient" /><span><span> Sin Garaje</span></span></label><label style={{width: '25%'}} className="active"><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/garaje-1-e1656413485778.png" /><noscript>&lt;img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/garaje-1-e1656413485778.png"&gt;</noscript>
                          <input id="g1" data-field-id="field18" type="radio" data-is-required="true" name="field18[]" defaultValue={18} className="validation-lenient" /><span><span> 1 Coche</span></span></label><label style={{width: '25%'}}><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/garaje-doble-1-e1656413477429.png" /><noscript>&lt;img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/garaje-doble-1-e1656413477429.png"&gt;</noscript>
                          <input id="g2" data-field-id="field18" type="radio" data-is-required="true" name="field18[]" defaultValue={35} className="validation-lenient" /><span><span> 2 Coches</span></span></label><label style={{width: '25%'}}><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/garaje-triple-1-e1656413468752.png" /><noscript>&lt;img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/garaje-triple-1-e1656413468752.png"&gt;</noscript>
                          <input id="g3" data-field-id="field18" type="radio" data-is-required="true" name="field18[]" defaultValue={52} className="validation-lenient" /><span><span> 3 Coches</span></span></label></div></div></div></div>
                <div data-identifier="field16" data-index={1} style={{width: '100%'}} className="even form-element form-element-field16 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
                  <div className="form-element-html"><div><div style={{backgroundColor: ''}} className="heading-cover field-cover "><div style={{textAlign: 'center', fontSize: '1.6em', paddingTop: '', paddingBottom: '', color: '#ff7f00'}} className="bold-false"><span>¿Cómo querés el Dormitorio Principal?</span></div>
                        <input type="hidden" data-field-id="field16" name="field16[]" defaultValue="¿Cómo querés el Dormitorio Principal?" /></div></div></div>
                </div><div data-identifier="field15" data-index={2} style={{width: '100%'}} className="form-element form-element-field15 options-true index-true form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
                  <div className="form-element-html"><div><div className="images-true checkbox-cover field-cover"><span className="sub-label-false"><span className="main-label" /><span className="sub-label" /></span><div data-placement="right" data-toggle="tooltip" tooltip data-trigger="hover" data-html="true" data-original-title><span className="error" /><label style={{width: ''}} className="active"><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorios-simple-1-e1656413633429.png" /><noscript>&lt;img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorios-simple-1-e1656413633429.png"&gt;</noscript>
                            <input id="dp1" defaultChecked data-field-id="field15" type="radio" data-is-required="true" name="field15[]" defaultValue={14} className="validation-lenient" /><span><span> Simple</span></span></label><label style={{width: ''}}><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorio-con-vestidor-1-e1656413643430.png" /><noscript>&lt;img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorio-con-vestidor-1-e1656413643430.png"&gt;</noscript>
                            <input id="dp2" data-field-id="field15" type="radio" data-is-required="true" name="field15[]" defaultValue={25} className="validation-lenient" /><span><span> Con Vestidor</span></span></label></div></div></div></div>
                  <div className="form-element-html"><div><div className="absolute-false customText-cover field-cover" style={{left: '', top: '', right: '', bottom: '', color: '#666666 !important', backgroundColor: ''}}><div className="full" style={{textAlign: 'left'}} />
                        <input type="hidden" name="field72" data-field-id="field72" /></div></div></div>
                </div><div data-identifier="field19" data-index={1} style={{width: '100%'}} className="even form-element form-element-field19 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
                  <div className="form-element-html"><div><div style={{backgroundColor: ''}} className="heading-cover field-cover "><div style={{textAlign: 'center', fontSize: '1.5em', paddingTop: '', paddingBottom: '', color: '#ff7f00'}} className="bold-false"><span>¿Y los Dormitorios Secundarios?</span></div>
                        <input type="hidden" data-field-id="field19" name="field19[]" defaultValue="¿Y los Dormitorios Secundarios?" /></div></div></div>
                </div><div data-identifier="field56" data-index={2} style={{width: '33%'}} className="form-element form-element-field56 options-true index-true form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
                  <div className="form-element-html"><div><div className="images-false checkbox-cover field-cover"><span className="sub-label-true"><span className="main-label"><span>De 1 cama</span></span><span className="sub-label"><p><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorio-simple-1-e1656413715365.png" /><noscript>&lt;img src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorio-simple-1-e1656413715365.png"&gt;</noscript></p></span></span><div data-placement="right" data-toggle="tooltip" tooltip data-trigger="hover" data-html="true" data-original-title><span className="error" /><label style={{width: ''}}><img alt="" />
                            <input id="ds10" defaultChecked data-field-id="field56" type="radio" data-is-required="true" name="field56[]" defaultValue={0} className="validation-lenient" /><span><span>Ninguno</span></span></label><label style={{width: ''}}><img alt="" />
                            <input id="ds11" data-field-id="field56" type="radio" data-is-required="true" name="field56[]" defaultValue={10} className="validation-lenient" /><span><span>1</span></span></label><label style={{width: ''}}><img alt="" />
                            <input id="ds12" data-field-id="field56" type="radio" data-is-required="true" name="field56[]" defaultValue={22} className="validation-lenient" /><span><span>2</span></span></label><label style={{width: ''}} className="active"><img alt="" />
                            <input id="ds13" data-field-id="field56" type="radio" data-is-required="true" name="field56[]" defaultValue={34} className="validation-lenient" /><span><span>3</span></span></label></div></div></div></div>
                </div><div data-identifier="field58" data-index={3} style={{width: '33%'}} className="even form-element form-element-field58 options-false index-false form-element-3 default-false form-element-type-checkbox is-required-true -handle">
                  <div className="form-element-html"><div><div className="images-false checkbox-cover field-cover"><span className="sub-label-true"><span className="main-label"><span>De 2 camas</span></span><span className="sub-label"><p><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorios-doble-1-e1656413726943.png" /><noscript>&lt;img src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorios-doble-1-e1656413726943.png"&gt;</noscript></p></span></span><div data-placement="right" data-toggle="tooltip" tooltip data-trigger="hover" data-html="true" data-original-title><span className="error" /><label style={{width: ''}}><img alt="" />
                            <input id="ds20" defaultChecked data-field-id="field58" type="radio" data-is-required="true" name="field58[]" defaultValue={0} className="validation-lenient" /><span><span>Ninguno</span></span></label><label style={{width: ''}}><img alt="" />
                            <input id="ds21" data-field-id="field58" type="radio" data-is-required="true" name="field58[]" defaultValue={18} className="validation-lenient" /><span><span>1</span></span></label><label style={{width: ''}}><img alt="" />
                            <input id="ds22" data-field-id="field58" type="radio" data-is-required="true" name="field58[]" defaultValue={36} className="validation-lenient" /><span><span>2</span></span></label><label style={{width: ''}} className="active"><img alt="" />
                            <input id="ds23" data-field-id="field58" type="radio" data-is-required="true" name="field58[]" defaultValue={54} className="validation-lenient" /><span><span>3</span></span></label><label style={{width: ''}}><img alt="" />
                            <input id="ds24" data-field-id="field58" type="radio" data-is-required="true" name="field58[]" defaultValue={72} className="validation-lenient" /><span><span>4</span></span></label></div></div></div></div>
                </div><div data-identifier="field57" data-index={4} style={{width: '33%'}} className="form-element form-element-field57 options-true index-true form-element-4 default-false form-element-type-checkbox is-required-true odd -handle">
                  <div className="form-element-html"><div><div className="images-false checkbox-cover field-cover"><span className="sub-label-true"><span className="main-label"><span>De 3 camas</span></span><span className="sub-label"><p><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorio-triple-1-e1656413707687.png" /><noscript>&lt;img src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorio-triple-1-e1656413707687.png"&gt;</noscript></p></span></span><div data-placement="right" data-toggle="tooltip" tooltip data-trigger="hover" data-html="true" data-original-title><span className="error" /><label style={{width: ''}}><img alt="" />
                            <input id="ds30" defaultChecked data-field-id="field57" type="radio" data-is-required="true" name="field57[]" defaultValue={0} className="validation-lenient" /><span><span>Ninguno</span></span></label><label style={{width: ''}}><img alt="" />
                            <input id="ds31" data-field-id="field57" type="radio" data-is-required="true" name="field57[]" defaultValue={20} className="validation-lenient" /><span><span>1</span></span></label><label style={{width: ''}}><img alt="" />
                            <input id="ds32" data-field-id="field57" type="radio" data-is-required="true" name="field57[]" defaultValue={44} className="validation-lenient" /><span><span>2</span></span></label><label style={{width: ''}} className="active"><img alt="" />
                            <input id="ds33" data-field-id="field57" type="radio" data-is-required="true" name="field57[]" defaultValue={65} className="validation-lenient" /><span><span>3</span></span></label></div></div></div></div>
                </div>
                <div data-identifier="field25" data-index={1} style={{width: '100%'}} className="even form-element form-element-field25 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
                  <div className="form-element-html"><div><div style={{backgroundColor: ''}} className="heading-cover field-cover "><div style={{textAlign: 'center', fontSize: '1.5em', paddingTop: '', paddingBottom: '', color: '#ff7f00'}} className="bold-false"><span>Otros Ambientes</span></div>
                        <input type="hidden" data-field-id="field25" name="field25[]" defaultValue="Otros Ambientes" /></div></div></div>
                </div><div data-identifier="field26" data-index={2} style={{width: '100%'}} className="form-element form-element-field26 options-false index-false form-element-2 default-false form-element-type-checkbox is-required-false odd -handle">
                  <div className="form-element-html"><div><div className="images-true checkbox-cover field-cover"><span className="sub-label-false"><span className="main-label" /><span className="sub-label" /></span><div data-placement="right" data-toggle="tooltip" tooltip data-trigger="hover" data-html="true" data-original-title><span className="error" /><label style={{width: '25%'}} className><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/deposito-1.png" /><noscript>&lt;img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/deposito-1.png"&gt;</noscript>
                            <input id="a0" che data-field-id="field26" type="checkbox" data-is-required="false" name="field26[]" defaultValue={8} className="validation-lenient" /><span><span> Depósito pequeño</span></span></label><label style={{width: '25%'}} className><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/playroom-1.png" /><noscript>&lt;img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/playroom-1.png"&gt;</noscript>
                            <input id="a1" data-field-id="field26" type="checkbox" data-is-required="false" name="field26[]" defaultValue={10} className="validation-lenient" /><span><span> Estudio</span></span></label><label style={{width: '25%'}} className><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/lavadero-1.png" /><noscript>&lt;img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/lavadero-1.png"&gt;</noscript>
                            <input id="a2" data-field-id="field26" type="checkbox" data-is-required="false" name="field26[]" defaultValue={6} className="validation-lenient" /><span><span> Lavadero</span></span></label><label style={{width: '25%'}} className="active"><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/estudio-1.png" /><noscript>&lt;img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/estudio-1.png"&gt;</noscript>
                            <input id="a3" data-field-id="field26" type="checkbox" data-is-required="false" name="field26[]" defaultValue={10} className="validation-lenient" /><span><span> Playroom</span></span></label></div></div></div></div>
                  <div data-identifier="field27" data-index={1} style={{width: '100%'}} className="even form-element form-element-field27 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
                    <div className="form-element-html"><div><div style={{backgroundColor: ''}} className="heading-cover field-cover "><div style={{textAlign: 'center', fontSize: '1.6em', paddingTop: '', paddingBottom: '', color: '#ff7f00'}} className="bold-false"><span>¿Cuántas Plantas?</span></div>
                          <input type="hidden" data-field-id="field27" name="field27[]" defaultValue="¿Cuántas Plantas?" /></div></div></div>
                  </div><div data-identifier="field28" data-index={2} style={{width: '100%'}} className="form-element form-element-field28 options-false index-false form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
                    <div className="form-element-html"><div><div className="images-true checkbox-cover field-cover"><span className="sub-label-false"><span className="main-label" /><span className="sub-label" /></span><div data-placement="right" data-toggle="tooltip" tooltip data-trigger="hover" data-html="true" data-original-title><span className="error" /><label style={{width: ''}}><img alt="" src="https://martinbonari.com/" />
                              <input id="p1" defaultChecked data-field-id="field28" type="radio" data-is-required="true" name="field28[]" defaultValue={0} className="validation-lenient" /><span><span> 1 Planta</span></span></label><label style={{width: ''}}><img alt="" />
                              <input id="p2" data-field-id="field28" type="radio" data-is-required="true" name="field28[]" defaultValue={6} className="validation-lenient" /><span><span> 2 Plantas</span></span></label><label style={{width: ''}} className="active"><img alt="" />
                              <input id="p3" data-field-id="field28" type="radio" data-is-required="true" name="field28[]" defaultValue={12} className="validation-lenient" /><span><span> 3 Plantas</span></span></label></div></div></div></div>
                    <button onclick="check()" className="button" style={{}}><a href="#descargar" style={{textDecoration: 'none', color: 'white'}}> ver presupusto</a></button>
                    <div style={{backgroundColor: 'margin-top:5rem', padding: '10%'}}><h2 id="q1" style={{color: 'black!important'}} /></div>
                  </div></div></div></div></div></div></form></div></div></div>

		  
		  
		  
							  
		  
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
