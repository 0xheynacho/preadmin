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
 
      <Head>
        <title>Dashboard</title>
	      
	    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<link rel="icon" href="icon.png" sizes="192x192">
<link rel="dns-prefetch" href="https://fonts.googleapis.com/">
<script type="text/javascript">

</script><script src="./index_files/wp-emoji-release.min.js.descarga" type="text/javascript" defer=""></script>

	<link rel="stylesheet" id="wp-block-library-css" href="./index_files/style.min.css" type="text/css" media="all">
<style id="global-styles-inline-css" type="text/css">
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--neve-link-color: var(--nv-primary-accent);--wp--preset--color--neve-link-hover-color: var(--nv-secondary-accent);--wp--preset--color--nv-site-bg: var(--nv-site-bg);--wp--preset--color--nv-light-bg: var(--nv-light-bg);--wp--preset--color--nv-dark-bg: var(--nv-dark-bg);--wp--preset--color--neve-text-color: var(--nv-text-color);--wp--preset--color--nv-text-dark-bg: var(--nv-text-dark-bg);--wp--preset--color--nv-c-1: var(--nv-c-1);--wp--preset--color--nv-c-2: var(--nv-c-2);--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
</style>
<link rel="stylesheet" id="formcraft-common-css" href="./index_files/formcraft-common.css" type="text/css" media="all">
<link rel="stylesheet" id="formcraft-form-css" href="./index_files/form.css" type="text/css" media="all">
<link rel="stylesheet" id="ims-fme-ssc-custom-css" href="./index_files/custom_plugin.css" type="text/css" media="all">
<link rel="stylesheet" id="collapscore-css-css" href="./index_files/core_style.css" type="text/css" media="all">
<link rel="stylesheet" id="collapseomatic-css-css" href="./index_files/light_style.css" type="text/css" media="all">
<link rel="stylesheet" id="gosign-gallery-box-slick-slider-css-css" href="./index_files/slick.min.css" type="text/css" media="all">
<link rel="stylesheet" id="gosign-gallery-box-slick-slider-css-theme-css" href="./index_files/slick-theme.min.css" type="text/css" media="all">
<link rel="stylesheet" id="gosign-gallery-box-fancybox-css-css" href="./index_files/jquery.fancybox.min.css" type="text/css" media="all">
<link rel="stylesheet" id="gosign-gallery-box-block-frontend-css-css" href="./index_files/style.min(1).css" type="text/css" media="all">
<link rel="stylesheet" id="neve-style-css" href="./index_files/style-main-new.min.css" type="text/css" media="all">
<style id="neve-style-inline-css" type="text/css">
.nv-ft-post{background:var(--nv-light-bg);margin-top:60px}.nv-ft-post h2{font-size:calc( var(--fontsize, var(--h2fontsize)) * 1.3)}.nv-ft-post .nv-meta-list{display:block}.nv-ft-post .non-grid-content{padding:32px}.nv-ft-post .wp-post-image{position:absolute;object-fit:cover;width:100%;height:100%}.nv-ft-post .nv-post-thumbnail-wrap{margin:0;position:relative;min-height:320px}
.nv-meta-list li.meta:not(:last-child):after { content:"/" }.nv-meta-list .no-mobile{
			display:none;
		}.nv-meta-list li.last::after{
			content: ""!important;
		}@media (min-width: 769px) {
			.nv-meta-list .no-mobile {
				display: inline-block;
			}
			.nv-meta-list li.last:not(:last-child)::after {
		 		content: "/" !important;
			}
		}
 :root{ --container: 300px;--postwidth:100%; --primarybtnbg: var(--nv-secondary-accent); --secondarybtnbg: var(--nv-primary-accent); --primarybtnhoverbg: var(--nv-secondary-accent); --secondarybtnhoverbg: var(--nv-primary-accent); --primarybtncolor: #000000; --secondarybtncolor: var(--nv-text-dark-bg); --primarybtnhovercolor: var(--nv-text-color); --secondarybtnhovercolor: var(--nv-text-dark-bg);--btnpadding:16px 35px;--primarybtnpadding:16px 35px;--secondarybtnpadding:16px 35px; --btnfs: 14px; --btnlineheight: 1.6em; --bodyfontfamily: Poppins; --bodyfontsize: 15px; --bodylineheight: 1.5em; --bodyletterspacing: 0px; --bodyfontweight: 300; --bodytexttransform: none; --headingsfontfamily: Poppins; --h1fontsize: 36px; --h1fontweight: 300; --h1lineheight: 1.2em; --h1letterspacing: 0px; --h1texttransform: none; --h2fontsize: 28px; --h2fontweight: 400; --h2lineheight: 1.3em; --h2letterspacing: 0px; --h2texttransform: none; --h3fontsize: 20px; --h3fontweight: 300; --h3lineheight: 1.3em; --h3letterspacing: 0px; --h3texttransform: none; --h4fontsize: 16px; --h4fontweight: 300; --h4lineheight: 1.3em; --h4letterspacing: 0px; --h4texttransform: none; --h5fontsize: 14px; --h5fontweight: 300; --h5lineheight: 1.3em; --h5letterspacing: 0px; --h5texttransform: none; --h6fontsize: 14px; --h6fontweight: 600; --h6lineheight: 1.3em; --h6letterspacing: 0px; --h6texttransform: none;--formfieldborderwidth:2px;--formfieldborderradius:3px; --formfieldbgcolor: var(--nv-site-bg); --formfieldbordercolor: #dddddd; --formfieldcolor: var(--nv-text-color);--formfieldpadding:10px 12px; } .single-post-container .alignfull > [class*="__inner-container"], .single-post-container .alignwide > [class*="__inner-container"]{ max-width:270px } .nv-meta-list{ --avatarsize: 20px; } .single .nv-meta-list{ --avatarsize: 20px; } .blog .blog-entry-title, .archive .blog-entry-title{ --fontweight: 200; } .blog .entry-summary, .archive .entry-summary, .blog .post-pages-links{ --fontsize: 1px; --fontweight: 200; } .nv-post-cover{ --height: 100px;--padding:20px 10px;--justify: center; --textalign: center; --valign: center; } .nv-post-cover .nv-title-meta-wrap, .nv-page-title-wrap, .entry-header{ --color: #171717; --textalign: center; } .nv-is-boxed.nv-title-meta-wrap{ --padding:40px 10px; --bgcolor: rgba(255,255,255,0); } .nv-overlay{ --opacity: 10; --blendmode: normal; } .nv-is-boxed.nv-comments-wrap{ --padding:20px; } .nv-is-boxed.comment-respond{ --padding:20px; } .global-styled{ --bgcolor: var(--nv-site-bg); } .header-top{ --rowbwidth:0px; --rowbcolor: #000000; --color: var(--nv-text-color); --bgcolor: #f5f5f5; } .header-main{ --rowbcolor: var(--nv-light-bg); --color: var(--nv-text-color); --bgcolor: var(--nv-site-bg); } .header-bottom{ --rowbwidth:0px; --rowbcolor: #000000; --color: var(--nv-text-color); --bgcolor: var(--nv-site-bg); } .header-menu-sidebar-bg{ --justify: flex-start; --textalign: left;--flexg: 1; --color: var(--nv-text-color); --bgcolor: var(--nv-site-bg); } .header-menu-sidebar{ width: 360px; } .builder-item--logo{ --maxwidth: 100px;--padding:10px 0; --textalign: right;--justify: flex-end; } .builder-item--nav-icon,.header-menu-sidebar .close-sidebar-panel .navbar-toggle{ --color: var(--nv-text-color);--borderradius:3px;--borderwidth:0; } .builder-item--nav-icon{ --padding:10px 15px 10px 15px;; } .builder-item--primary-menu{ --color: var(--nv-text-color); --hovercolor: #a6a6a6; --activecolor: var(--nv-text-color); --spacing: 20px; --height: 25px; --fontsize: 1em; --lineheight: 1.6em; --letterspacing: 0px; --fontweight: 400; --texttransform: capitalize; --iconsize: 1em; } .hfg-is-group.has-primary-menu .inherit-ff{ --inheritedfw: 400; } .footer-top-inner .row{ grid-template-columns:1fr 1fr 1fr; --valign: flex-start; } .footer-top{ --rowbcolor: var(--nv-light-bg); --color: var(--nv-text-color); --bgcolor: var(--nv-site-bg); } .footer-main-inner .row{ grid-template-columns:1fr; --valign: flex-start; } .footer-main{ --rowbcolor: var(--nv-light-bg); --color: var(--nv-text-color); --bgcolor: var(--nv-site-bg); } .footer-bottom-inner .row{ grid-template-columns:1fr; --valign: flex-start; } .footer-bottom{ --rowbwidth:0px; --rowbcolor: #000000; --color: var(--nv-primary-accent); --bgcolor: #f1f1f1; } .builder-item--footer-menu{ --hovercolor: var(--nv-primary-accent); --spacing: 20px; --height: 25px; --fontsize: 1em; --lineheight: 1.6em; --letterspacing: 0px; --fontweight: 400; --texttransform: none; --iconsize: 1em; --textalign: left;--justify: flex-start; } @media(min-width: 576px){ :root{ --container: 600px;--postwidth:100%;--btnpadding:16px 35px;--primarybtnpadding:16px 35px;--secondarybtnpadding:16px 35px; --btnfs: 14px; --btnlineheight: 1.6em; --bodyfontsize: 16px; --bodylineheight: 1.6em; --bodyletterspacing: 0px; --h1fontsize: 38px; --h1lineheight: 1.3em; --h1letterspacing: 0px; --h2fontsize: 28px; --h2lineheight: 1.3em; --h2letterspacing: 0px; --h3fontsize: 20px; --h3lineheight: 1.3em; --h3letterspacing: 0px; --h4fontsize: 16px; --h4lineheight: 1.3em; --h4letterspacing: 0px; --h5fontsize: 14px; --h5lineheight: 1.3em; --h5letterspacing: 0px; --h6fontsize: 14px; --h6lineheight: 1.3em; --h6letterspacing: 0px; } .single-post-container .alignfull > [class*="__inner-container"], .single-post-container .alignwide > [class*="__inner-container"]{ max-width:570px } .nv-meta-list{ --avatarsize: 20px; } .single .nv-meta-list{ --avatarsize: 20px; } .nv-post-cover{ --height: 130px;--padding:20px 30px;--justify: center; --textalign: center; --valign: center; } .nv-post-cover .nv-title-meta-wrap, .nv-page-title-wrap, .entry-header{ --textalign: center; } .nv-is-boxed.nv-title-meta-wrap{ --padding:60px 30px; } .nv-is-boxed.nv-comments-wrap{ --padding:30px; } .nv-is-boxed.comment-respond{ --padding:30px; } .header-top{ --height:100px;--rowbwidth:0px; } .header-bottom{ --rowbwidth:0px; } .header-menu-sidebar-bg{ --justify: flex-start; --textalign: left;--flexg: 1; } .header-menu-sidebar{ width: 360px; } .builder-item--logo{ --maxwidth: 150px;--padding:10px 0; --textalign: center;--justify: center; } .builder-item--nav-icon{ --padding:10px 15px; } .builder-item--primary-menu{ --spacing: 20px; --height: 25px; --fontsize: 1em; --lineheight: 1.6em; --letterspacing: 0px; --iconsize: 1em; } .footer-bottom{ --rowbwidth:0px; } .builder-item--footer-menu{ --spacing: 20px; --height: 25px; --fontsize: 1em; --lineheight: 1.6em; --letterspacing: 0px; --iconsize: 1em; --textalign: left;--justify: flex-start; } }@media(min-width: 960px){ :root{ --container: 900px;--postwidth:100%;--btnpadding:16px 35px;--primarybtnpadding:16px 35px;--secondarybtnpadding:16px 35px; --btnfs: 16px; --btnlineheight: 1.6em; --bodyfontsize: 17px; --bodylineheight: 1.7em; --bodyletterspacing: 0px; --h1fontsize: 35px; --h1lineheight: 1.3em; --h1letterspacing: 0px; --h2fontsize: 25px; --h2lineheight: 1.3em; --h2letterspacing: 0px; --h3fontsize: 20px; --h3lineheight: 1.3em; --h3letterspacing: 0px; --h4fontsize: 20px; --h4lineheight: 1.3em; --h4letterspacing: 0px; --h5fontsize: 16px; --h5lineheight: 1.3em; --h5letterspacing: 0px; --h6fontsize: 16px; --h6lineheight: 1.3em; --h6letterspacing: 0px; } body:not(.single):not(.archive):not(.blog):not(.search):not(.error404) .neve-main > .container .col, body.post-type-archive-course .neve-main > .container .col, body.post-type-archive-llms_membership .neve-main > .container .col{ max-width: 100%; } body:not(.single):not(.archive):not(.blog):not(.search):not(.error404) .nv-sidebar-wrap, body.post-type-archive-course .nv-sidebar-wrap, body.post-type-archive-llms_membership .nv-sidebar-wrap{ max-width: 0%; } .neve-main > .archive-container .nv-index-posts.col{ max-width: 100%; } .neve-main > .archive-container .nv-sidebar-wrap{ max-width: 0%; } .neve-main > .single-post-container .nv-single-post-wrap.col{ max-width: 70%; } .single-post-container .alignfull > [class*="__inner-container"], .single-post-container .alignwide > [class*="__inner-container"]{ max-width:600px } .container-fluid.single-post-container .alignfull > [class*="__inner-container"], .container-fluid.single-post-container .alignwide > [class*="__inner-container"]{ max-width:calc(70% + 15px) } .neve-main > .single-post-container .nv-sidebar-wrap{ max-width: 30%; } .nv-meta-list{ --avatarsize: 20px; } .single .nv-meta-list{ --avatarsize: 20px; } .blog .blog-entry-title, .archive .blog-entry-title{ --fontsize: 50px; } .blog .entry-summary, .archive .entry-summary, .blog .post-pages-links{ --fontsize: 30px; } .nv-post-cover{ --height: 0px;--padding:10px 40px;--justify: center; --textalign: center; --valign: center; } .nv-post-cover .nv-title-meta-wrap, .nv-page-title-wrap, .entry-header{ --textalign: center; } .nv-is-boxed.nv-title-meta-wrap{ --padding:30px 40px; } .nv-is-boxed.nv-comments-wrap{ --padding:40px; } .nv-is-boxed.comment-respond{ --padding:40px; } .header-top{ --height:100px;--rowbwidth:1px; } .header-bottom{ --rowbwidth:0px; } .header-menu-sidebar-bg{ --justify: flex-start; --textalign: left;--flexg: 1; } .header-menu-sidebar{ width: 360px; } .builder-item--logo{ --maxwidth: 153px;--padding:10px 0; --textalign: center;--justify: center; } .builder-item--nav-icon{ --padding:10px 15px; } .builder-item--primary-menu{ --spacing: 14px; --height: 25px; --fontsize: 0.8em; --lineheight: 1.6em; --letterspacing: 0px; --iconsize: 0.8em; } .footer-bottom{ --rowbwidth:1px; } .builder-item--footer-menu{ --spacing: 20px; --height: 25px; --fontsize: 1em; --lineheight: 1.6em; --letterspacing: 0px; --iconsize: 1em; --textalign: center;--justify: center; } }:root{--nv-primary-accent:#2b2b2b;--nv-secondary-accent:#f58637;--nv-site-bg:#ffffff;--nv-light-bg:#ededed;--nv-dark-bg:#14171c;--nv-text-color:#14171c;--nv-text-dark-bg:#ffffff;--nv-c-1:#fbbf94;--nv-c-2:#f37262;--nv-fallback-ff:Arial, Helvetica, sans-serif;}
 #content.neve-main .container .alignfull > [class*="__inner-container"],#content.neve-main .alignwide > [class*="__inner-container"]{ max-width: 270px; } @media(min-width: 576px){ #content.neve-main .container .alignfull > [class*="__inner-container"],#content.neve-main .alignwide > [class*="__inner-container"]{ max-width: 570px; } } @media(min-width: 960px) { #content.neve-main .container .alignfull > [class*="__inner-container"],#content.neve-main .container .alignwide > [class*="__inner-container"]{ max-width: 870px; } #content.neve-main > .container > .row > .col{ max-width: 100%; } body:not(.neve-off-canvas) #content.neve-main > .container > .row > .nv-sidebar-wrap, body:not(.neve-off-canvas) #content.neve-main > .container > .row > .nv-sidebar-wrap.shop-sidebar { max-width: 0%; } } 
</style>
<link rel="stylesheet" id="neve-google-font-poppins-css" href="./index_files/css" type="text/css" media="all">

<link rel="stylesheet" type="text/css" href="./index_files/smartslider.min.css" media="all">
<style data-related="n2-ss-3">div#n2-ss-3 .n2-ss-slider-1{display:grid;position:relative;}div#n2-ss-3 .n2-ss-slider-2{display:grid;position:relative;overflow:hidden;padding:0px 0px 0px 0px;border:0px solid RGBA(62,62,62,1);border-radius:0px;background-clip:padding-box;background-repeat:repeat;background-position:50% 50%;background-size:cover;background-attachment:scroll;z-index:1;}div#n2-ss-3:not(.n2-ss-loaded) .n2-ss-slider-2{background-image:none !important;}div#n2-ss-3 .n2-ss-slider-3{display:grid;grid-template-areas:'cover';position:relative;overflow:hidden;z-index:10;}div#n2-ss-3 .n2-ss-slider-3 > *{grid-area:cover;}div#n2-ss-3 .n2-ss-slide-backgrounds,div#n2-ss-3 .n2-ss-slider-3 > .n2-ss-divider{position:relative;}div#n2-ss-3 .n2-ss-slide-backgrounds{z-index:10;}div#n2-ss-3 .n2-ss-slide-backgrounds > *{overflow:hidden;}div#n2-ss-3 .n2-ss-slide-background{transform:translateX(-100000px);}div#n2-ss-3 .n2-ss-slider-4{place-self:center;position:relative;width:100%;height:100%;z-index:20;display:grid;grid-template-areas:'slide';}div#n2-ss-3 .n2-ss-slider-4 > *{grid-area:slide;}div#n2-ss-3.n2-ss-full-page--constrain-ratio .n2-ss-slider-4{height:auto;}div#n2-ss-3 .n2-ss-slide{display:grid;place-items:center;grid-auto-columns:100%;position:relative;z-index:20;-webkit-backface-visibility:hidden;transform:translateX(-100000px);}div#n2-ss-3 .n2-ss-slide{perspective:1500px;}div#n2-ss-3 .n2-ss-slide-active{z-index:21;}.n2-ss-background-animation{position:absolute;top:0;left:0;width:100%;height:100%;z-index:3;}div#n2-ss-3 .n2-ss-background-animation{position:absolute;top:0;left:0;width:100%;height:100%;z-index:3;}div#n2-ss-3 .n2-ss-background-animation .n2-ss-slide-background{z-index:auto;}div#n2-ss-3 .n2-bganim-side{position:absolute;left:0;top:0;overflow:hidden;background:RGBA(51,51,51,1);}div#n2-ss-3 .n2-bganim-tile-overlay-colored{z-index:100000;background:RGBA(51,51,51,1);}div#n2-ss-3 .nextend-arrow{cursor:pointer;overflow:hidden;line-height:0 !important;z-index:18;-webkit-user-select:none;}div#n2-ss-3 .nextend-arrow img{position:relative;display:block;}div#n2-ss-3 .nextend-arrow img.n2-arrow-hover-img{display:none;}div#n2-ss-3 .nextend-arrow:FOCUS img.n2-arrow-hover-img,div#n2-ss-3 .nextend-arrow:HOVER img.n2-arrow-hover-img{display:inline;}div#n2-ss-3 .nextend-arrow:FOCUS img.n2-arrow-normal-img,div#n2-ss-3 .nextend-arrow:HOVER img.n2-arrow-normal-img{display:none;}div#n2-ss-3 .nextend-arrow-animated{overflow:hidden;}div#n2-ss-3 .nextend-arrow-animated > div{position:relative;}div#n2-ss-3 .nextend-arrow-animated .n2-active{position:absolute;}div#n2-ss-3 .nextend-arrow-animated-fade{transition:background 0.3s, opacity 0.4s;}div#n2-ss-3 .nextend-arrow-animated-horizontal > div{transition:all 0.4s;transform:none;}div#n2-ss-3 .nextend-arrow-animated-horizontal .n2-active{top:0;}div#n2-ss-3 .nextend-arrow-previous.nextend-arrow-animated-horizontal .n2-active{left:100%;}div#n2-ss-3 .nextend-arrow-next.nextend-arrow-animated-horizontal .n2-active{right:100%;}div#n2-ss-3 .nextend-arrow-previous.nextend-arrow-animated-horizontal:HOVER > div,div#n2-ss-3 .nextend-arrow-previous.nextend-arrow-animated-horizontal:FOCUS > div{transform:translateX(-100%);}div#n2-ss-3 .nextend-arrow-next.nextend-arrow-animated-horizontal:HOVER > div,div#n2-ss-3 .nextend-arrow-next.nextend-arrow-animated-horizontal:FOCUS > div{transform:translateX(100%);}div#n2-ss-3 .nextend-arrow-animated-vertical > div{transition:all 0.4s;transform:none;}div#n2-ss-3 .nextend-arrow-animated-vertical .n2-active{left:0;}div#n2-ss-3 .nextend-arrow-previous.nextend-arrow-animated-vertical .n2-active{top:100%;}div#n2-ss-3 .nextend-arrow-next.nextend-arrow-animated-vertical .n2-active{bottom:100%;}div#n2-ss-3 .nextend-arrow-previous.nextend-arrow-animated-vertical:HOVER > div,div#n2-ss-3 .nextend-arrow-previous.nextend-arrow-animated-vertical:FOCUS > div{transform:translateY(-100%);}div#n2-ss-3 .nextend-arrow-next.nextend-arrow-animated-vertical:HOVER > div,div#n2-ss-3 .nextend-arrow-next.nextend-arrow-animated-vertical:FOCUS > div{transform:translateY(100%);}div#n2-ss-3 .nextend-shadow{width:100%;z-index:0;}div#n2-ss-3 .nextend-shadow img{max-width:none;width:100%;}div#n2-ss-3-align{max-width:1280px;}div#n2-ss-3 .nextend-arrow img{width: 32px}@media (min-width: 1200px){div#n2-ss-3 [data-hide-desktopportrait="1"]{display: none !important;}}@media (orientation: landscape) and (max-width: 1199px) and (min-width: 901px),(orientation: portrait) and (max-width: 1199px) and (min-width: 701px){div#n2-ss-3 [data-hide-tabletportrait="1"]{display: none !important;}}@media (orientation: landscape) and (max-width: 900px),(orientation: portrait) and (max-width: 700px){div#n2-ss-3 [data-hide-mobileportrait="1"]{display: none !important;}div#n2-ss-3 .nextend-arrow img{width: 16px}}</style>
<script type="text/javascript" src="./index_files/jquery.min.js.descarga" id="jquery-core-js"></script>
<script type="text/javascript" src="./index_files/jquery-migrate.min.js.descarga" id="jquery-migrate-js"></script>
<script type="text/javascript" src="./index_files/slick.min.js.descarga" id="gosign-gallery-box-slick-slider-js"></script>
<script type="text/javascript" src="./index_files/jquery.fancybox.min.js.descarga" id="gosign-gallery-box-fancybox-js-js"></script>
<script type="text/javascript" src="./index_files/script.min.js.descarga" id="gosign-gallery-box-block-backend-js-js"></script>


<style>

/* CSS added by Hide Metadata Plugin */

.entry-meta .byline,
			.entry-meta .by-author,
			.entry-header .entry-meta > span.byline,
			.entry-meta .author.vcard {
				display: none;
			}
.entry-meta .posted-on,
			.entry-header .entry-meta > span.posted-on {
				display: none;
			}</style>
<noscript>		<style type="text/css" id="wp-custom-css">
			
.page-id-634 .style-plain.nav-menu-primary {
    display: none;
}
.page-id-485 .style-plain.nav-menu-primary {
    display: none;
}
.page-id-9 .style-plain.nav-menu-primary {
    display: none;
}
.page-id-2718 .style-plain.nav-menu-primary {
    display: none;
}


@media screen and (min-width:600px) {
.titulom
	{
		display: none;
	}
}

.banda {
    border-top: 1px solid #b3b3b3;
    border-bottom: 1px solid #b3b3b3;
}


		</style>
		<noscript><style id="rocket-lazyload-nojs-css">.rll-youtube-player, [data-lazy-src]{display:none !important;}</style></noscript>
	<script>(function(){this._N2=this._N2||{_r:[],_d:[],r:function(){this._r.push(arguments)},d:function(){this._d.push(arguments)}}}).call(window);!function(a){a.indexOf("Safari")>0&&-1===a.indexOf("Chrome")&&document.documentElement.style.setProperty("--ss-safari-fix-225962","1px")}(navigator.userAgent);</script><script src="./index_files/n2.min.js.descarga" defer="" async=""></script>
<script src="./index_files/smartslider-frontend.min.js.descarga" defer="" async=""></script>
<script src="./index_files/ss-simple.min.js.descarga" defer="" async=""></script>
<script src="./index_files/smartslider-backgroundanimation.min.js.descarga" defer="" async=""></script>
<script src="./index_files/w-arrow-image.min.js.descarga" defer="" async=""></script>
<script>_N2.r('documentReady',function(){_N2.r(["documentReady","smartslider-frontend","smartslider-backgroundanimation","SmartSliderWidgetArrowImage","SmartSliderWidget","ss-simple"],function(){new _N2.SmartSliderSimple('n2-ss-3',{"admin":false,"background.video.mobile":1,"loadingTime":2000,"alias":{"id":0,"smoothScroll":0,"slideSwitch":0,"scroll":1},"align":"normal","isDelayed":0,"responsive":{"mediaQueries":{"all":false,"desktopportrait":["(min-width: 1200px)"],"tabletportrait":["(orientation: landscape) and (max-width: 1199px) and (min-width: 901px)","(orientation: portrait) and (max-width: 1199px) and (min-width: 701px)"],"mobileportrait":["(orientation: landscape) and (max-width: 900px)","(orientation: portrait) and (max-width: 700px)"]},"base":{"slideOuterWidth":1280,"slideOuterHeight":720,"sliderWidth":1280,"sliderHeight":720,"slideWidth":1280,"slideHeight":720},"hideOn":{"desktopLandscape":false,"desktopPortrait":false,"tabletLandscape":false,"tabletPortrait":false,"mobileLandscape":false,"mobilePortrait":false},"onResizeEnabled":true,"type":"auto","sliderHeightBasedOn":"real","focusUser":1,"focusEdge":"auto","breakpoints":[{"device":"tabletPortrait","type":"max-screen-width","portraitWidth":1199,"landscapeWidth":1199},{"device":"mobilePortrait","type":"max-screen-width","portraitWidth":700,"landscapeWidth":900}],"enabledDevices":{"desktopLandscape":0,"desktopPortrait":1,"tabletLandscape":0,"tabletPortrait":1,"mobileLandscape":0,"mobilePortrait":1},"sizes":{"desktopPortrait":{"width":1280,"height":720,"max":3000,"min":1200},"tabletPortrait":{"width":701,"height":394,"customHeight":false,"max":1199,"min":701},"mobilePortrait":{"width":320,"height":180,"customHeight":false,"max":900,"min":320}},"overflowHiddenPage":0,"focus":{"offsetTop":"#wpadminbar","offsetBottom":""}},"controls":{"mousewheel":2,"touch":"horizontal","keyboard":0,"blockCarouselInteraction":1},"playWhenVisible":1,"playWhenVisibleAt":0.5,"lazyLoad":0,"lazyLoadNeighbor":0,"blockrightclick":0,"maintainSession":0,"autoplay":{"enabled":1,"start":1,"duration":4000,"autoplayLoop":1,"allowReStart":0,"pause":{"click":1,"mouse":"0","mediaStarted":1},"resume":{"click":0,"mouse":"0","mediaEnded":1,"slidechanged":0},"interval":1,"intervalModifier":"loop","intervalSlide":"current"},"perspective":1500,"layerMode":{"playOnce":0,"playFirstLayer":1,"mode":"skippable","inAnimation":"mainInEnd"},"bgAnimations":{"global":[{"type":"Flat","tiles":{"delay":0,"sequence":"ForwardDiagonal"},"main":{"type":"both","duration":1,"zIndex":2,"current":{"ease":"easeOutCubic","opacity":0}}}],"color":"RGBA(51,51,51,1)","speed":"normal"},"mainanimation":{"type":"fade","duration":1800,"delay":0,"ease":"easeOutQuad","shiftedBackgroundAnimation":0},"carousel":1,"initCallbacks":function(){new _N2.SmartSliderWidgetArrowImage(this);new _N2.SmartSliderWidget(this,'shadow','.nextend-shadow')}})})});</script>  
	      
	    
      </Head>
	

<body style="background-color:whitesmoke;" class="home page-template-default page page-id-7  nv-blog-default nv-sidebar-full-width nv-without-title menu_sidebar_slide_left" id="neve_body">
<script data-cfasync="false" data-no-defer="1">var ewww_webp_supported=false;</script>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-dark-grayscale"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0 0.49803921568627"></fefuncr><fefuncg type="table" tableValues="0 0.49803921568627"></fefuncg><fefuncb type="table" tableValues="0 0.49803921568627"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-grayscale"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0 1"></fefuncr><fefuncg type="table" tableValues="0 1"></fefuncg><fefuncb type="table" tableValues="0 1"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-purple-yellow"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0.54901960784314 0.98823529411765"></fefuncr><fefuncg type="table" tableValues="0 1"></fefuncg><fefuncb type="table" tableValues="0.71764705882353 0.25490196078431"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-blue-red"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0 1"></fefuncr><fefuncg type="table" tableValues="0 0.27843137254902"></fefuncg><fefuncb type="table" tableValues="0.5921568627451 0.27843137254902"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-midnight"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0 0"></fefuncr><fefuncg type="table" tableValues="0 0.64705882352941"></fefuncg><fefuncb type="table" tableValues="0 1"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-magenta-yellow"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0.78039215686275 1"></fefuncr><fefuncg type="table" tableValues="0 0.94901960784314"></fefuncg><fefuncb type="table" tableValues="0.35294117647059 0.47058823529412"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-purple-green"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0.65098039215686 0.40392156862745"></fefuncr><fefuncg type="table" tableValues="0 1"></fefuncg><fefuncb type="table" tableValues="0.44705882352941 0.4"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-blue-orange"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0.098039215686275 1"></fefuncr><fefuncg type="table" tableValues="0 0.66274509803922"></fefuncg><fefuncb type="table" tableValues="0.84705882352941 0.41960784313725"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><div class="wrapper">
	
	

	<style>.header-menu-sidebar .nav-ul li .wrap { padding: 15px 0; white-space: unset; display: flex; justify-content: space-between; align-items: center; }.header-menu-sidebar .nav-ul li .wrap a { width: 100%; }.header-menu-sidebar .nav-ul li .wrap a:hover { color: var(--hovercolor); }.header-menu-sidebar .nav-ul li .wrap button { border: unset; height: 100%; }</style>
<style>
.casa {
	
	background-color: white;
	background-size: cover;
	background-repeat: no-repeat;

	} 
	
	span{
		color: black;
}

.button {
  background-color: #00cdc2; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}



	</style>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap" rel="stylesheet">
	
	<img src="head.png" alt="">
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
	
	
<main id="content" class="neve-main">
<div class="container single-page-container">
	<div class="row">
				<div class="nv-single-page-wrap col">
			<div class="nv-content-wrap entry-content">

<div  class="wp-block-cover alignfull banda" style="min-height:408px ;" ><span  aria-hidden="true" class="wp-block-cover__background has-nv-site-bg-background-color has-background-dim"></span><div class="wp-block-cover__inner-container">
<div class="wp-container-5 wp-block-group"><div class="wp-block-group__inner-container">
<div style="height:0px" aria-hidden="true" class="wp-block-spacer"></div>

</div></div>
<div style="height:0px" aria-hidden="true" class="wp-block-spacer"></div>
<h1 style="margin:5%;color:black; text-align: center;" id="Presupuesto">Completa estos simples datos</h1>
<div class="wp-block-formcraft-embed-form"><div data-uniq="62d16bd62bbbb" class="uniq-62d16bd62bbbb formcraft-css form-live align-center">
			<div class="form-cover"   >
			<form data-thousand="" data-decimal="." data-delay="" data-id="6" class="fc-form fc-form-6 align- spin- dont-submit-hidden- disable-enter- label-placeholder field-border-visible frame-hidden save-form-true remove-asterisk-true icons-hide-false field-alignment-center options-fade" style="width: 75%; color: #666666; font-size: 110%; background: white;">
				<div class="form-page form-page-0 active" data-index="0">
					<div class="form-page-content     " style="background-color:white;"  >
						<div data-identifier="field62" data-index="0" style="width: 100%" class="form-element form-element-field62 options-false index-false form-element-0 default-false form-element-type-customText is-required-false odd -handle">
							<div class="form-element-html"><div><div class="absolute-false customText-cover field-cover" style="color: #666666 !important;"> <div class="full" style="text-align: left"></div>
							<input type="hidden" name="field62" data-field-id="field62"></div></div></div>
							
						</div>
						
						<div  data-identifier="field6" data-index="1" style="width: 100%" class="even form-element form-element-field6 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
							<div class="form-element-html"><div><div  class="heading-cover field-cover "><div style="text-align: center; font-size: 1.4em;color: #ff7f00" class="bold-false"><span>¿Qué Tipo de Cocina Te Gusta Más?</span></div>
							<input type="hidden" data-field-id="field6" name="field6[]" value="¿Qué Tipo de Cocina Te Gusta Más?"></div></div></div>
							
						</div><div data-identifier="field3" data-index="2" style="width: 100%" class="form-element form-element-field3 options-false index-false form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
							<div class="form-element-html"><div><div class="images-true checkbox-cover field-cover"><span class="sub-label-false"><span class="main-label"></span><span class="sub-label"></span></span><div data-placement="right" data-toggle="tooltip" tooltip="" data-trigger="hover" data-html="true" data-original-title=""><span class="error"></span><label style="width:" class="active"><img alt="" src="./index_files/cocina-1-e1656410736733.png" class="lazyloaded" data-ll-status="loaded"><noscript><img alt="" src="./index_files/cocina-1-e1656410736733.png"></noscript>
								<input id="cocina1" checked data-field-id="field3" type="radio" data-is-required="true" name="field3[]" value="8" class="validation-lenient"  ><span><span> Simple</span></span></label><label style="width:" class=""><img alt="" src="./index_files/cocina-con-isla-2-e1656410518451.png" class="lazyloaded" data-ll-status="loaded"><noscript><img alt="" src="./index_files/cocina-con-isla-2-e1656410518451.png"></noscript>
									<input id="cocina2" data-field-id="field3" type="radio" data-is-required="true" name="field3[]" value="14" class="validation-lenient" ><span><span> Con Isla</span></span></label><label style="width:" class=""><img alt="" src="./index_files/cocina-comedor-isla-1-e1656410695546.png" class="lazyloaded" data-ll-status="loaded"><noscript><img alt="" src="./index_files/cocina-comedor-isla-1-e1656410695546.png"></noscript>
										<input id="cocina3" data-field-id="field3" type="radio" data-is-required="true" name="field3[]" value="26" class="validation-lenient" ><span><span> Isla y Comedor</span></span></label></div></div></div></div>
							  
									

						</div>
						<div data-identifier="field83" data-index="3" style="width: 100%" class="even form-element form-element-field83 options- index- form-element-3 default-false form-element-type- is-required-false -handle">
							<div class="form-element-html">
							</div>
							<div data-identifier="field7" data-index="1" style="width: 100%" class="even form-element form-element-field7 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
								<div class="form-element-html"><div><div style="background-color:" class="heading-cover field-cover "><div style="text-align: center; font-size: 1.7000000000000002em; padding-top: ; padding-bottom: ; color: #ff7f00" class="bold-false"><span>¿Cuántos Baños Necesitás?</span></div>
								<input type="hidden" data-field-id="field7" name="field7[]" value="¿Cuántos Baños Necesitás?"></div></div></div>
								
							</div><div data-identifier="field51" data-index="2" style="width: 33%" class="form-element form-element-field51 options-false index-false form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
								<div class="form-element-html"><div><div class="images-false checkbox-cover field-cover"><span class="sub-label-true"><span class="main-label"><span>Toilettes</span></span><span class="sub-label"><p><img src="./index_files/toil-gris.png" class="lazyloaded" data-ll-status="loaded"><noscript><img src="./index_files/toil-gris.png"></noscript></p></span></span><div data-placement="right" data-toggle="tooltip" tooltip="" data-trigger="hover" data-html="true" data-original-title=""><span class="error"></span><label style="width:" class=""><img alt="">
									<input id="bToilettes0" checked data-field-id="field51" type="radio" data-is-required="true" name="field51[]" value="0" class="validation-lenient"><span><span>Ninguno</span></span></label><label style="width:" class=""><img alt="">
									<input id="bToilettes1"data-field-id="field51" type="radio" data-is-required="true" name="field51[]" value="4" class="validation-lenient"><span><span>1 </span></span></label><label style="width:" class=""><img alt="">
									<input id="bToilettes2" data-field-id="field51" type="radio" data-is-required="true" name="field51[]" value="8" class="validation-lenient"><span><span>2 </span></span></label><label style="width:" class="active"><img alt="">
									<input id="bToilettes3"data-field-id="field51" type="radio" data-is-required="true" name="field51[]" value="12" class="validation-lenient"><span><span>3</span></span></label></div></div></div></div>
								
							</div><div data-identifier="field53" data-index="3" style="width: 33%" class="even form-element form-element-field53 options-false index-false form-element-3 default-false form-element-type-checkbox is-required-true -handle">
								<div class="form-element-html"><div><div class="images-false checkbox-cover field-cover"><span class="sub-label-true"><span class="main-label"><span>Simple</span></span><span class="sub-label"><p><img src="./index_files/bano.png" class="lazyloaded" data-ll-status="loaded"><noscript><img src="./index_files/bano.png"></noscript></p></span></span><div data-placement="right" data-toggle="tooltip" tooltip="" data-trigger="hover" data-html="true" data-original-title=""><span class="error"></span><label style="width:"><img alt="">
									<input id="bsimple0" checked data-field-id="field53" type="radio" data-is-required="true" name="field53[]" value="0" class="validation-lenient"><span><span>Ninguno</span></span></label><label style="width:" class=""><img alt="">
										<input id="bsimple1" data-field-id="field53" type="radio" data-is-required="true" name="field53[]" value="5" class="validation-lenient"><span><span>1 </span></span></label><label style="width:" class="active"><img alt="">
											<input id="bsimple2" data-field-id="field53" type="radio" data-is-required="true" name="field53[]" value="11" class="validation-lenient"><span><span>2 </span></span></label><label style="width:" class=""><img alt="">
												<input id="bsimple3" data-field-id="field53" type="radio" data-is-required="true" name="field53[]" value="26" class="validation-lenient"><span><span>3</span></span></label></div></div></div></div>
								
							</div><div data-identifier="field52" data-index="4" style="width: 33%" class="form-element form-element-field52 options-false index-false form-element-4 default-false form-element-type-checkbox is-required-true odd -handle">
								<div class="form-element-html"><div><div class="images-false checkbox-cover field-cover"><span class="sub-label-true"><span class="main-label"><span>Con Ante baño</span></span><span class="sub-label"><p><img src="./index_files/antebano.png" class="lazyloaded" data-ll-status="loaded"><noscript><img src="./index_files/antebano.png"></noscript></p></span></span><div data-placement="right" data-toggle="tooltip" tooltip="" data-trigger="hover" data-html="true" data-original-title=""><span class="error"></span><label style="width:" class="active"><img alt="">
									<input id="bConAnteb0" checked data-field-id="field52" type="radio" data-is-required="true" name="field52[]" value="0" class="validation-lenient"><span><span>Ninguno</span></span></label><label style="width:"><img alt="">
										<input id="bConAnteb1" data-field-id="field52" type="radio" data-is-required="true" name="field52[]" value="8" class="validation-lenient"><span><span>1 </span></span></label><label style="width:"><img alt="">
											<input id="bConAnteb2" data-field-id="field52" type="radio" data-is-required="true" name="field52[]" value="16" class="validation-lenient"><span><span>2 </span></span></label><label style="width:"><img alt="">
												<input id="bConAnteb3"data-field-id="field52" type="radio" data-is-required="true" name="field52[]" value="24" class="validation-lenient"><span><span>3</span></span></label></div></div></div></div>
								
							</div>
							<div data-identifier="field9" data-index="1" style="width: 100%" class="even form-element form-element-field9 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
								<div class="form-element-html"><div><div style="background-color:" class="heading-cover field-cover "><div style="text-align: center; font-size: 1.8000000000000003em; padding-top: ; padding-bottom: ; color: #ff7f00" class="bold-false"><span>¿Comedor para cuántas personas?</span></div>
								<input type="hidden" data-field-id="field9" name="field9[]" value="¿Comedor para cuántas personas?"></div></div></div>
								
							</div><div data-identifier="field10" data-index="2" style="width: 100%" class="form-element form-element-field10 options-false index-false form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
								<div class="form-element-html"><div><div class="images-true checkbox-cover field-cover"><span class="sub-label-false"><span class="main-label"></span><span class="sub-label"></span></span><div data-placement="right" data-toggle="tooltip" tooltip="" data-trigger="hover" data-html="true" data-original-title=""><span class="error"></span><label style="width: 25%"><img alt="" src="https://martinbonari.com/">
									<input  id="Comedor0" checked data-field-id="field10" type="radio" data-is-required="true" name="field10[]" value="0" class="validation-lenient"><span><span> Sin Comedor</span></span></label><label style="width: 25%" class="active"><img alt="">
										<input id="Comedor1" data-field-id="field10" type="radio" data-is-required="true" name="field10[]" value="13" class="validation-lenient"><span><span> 6 Personas</span></span></label><label style="width: 25%"><img alt="">
											<input id="Comedor2" data-field-id="field10" type="radio" data-is-required="true" name="field10[]" value="15" class="validation-lenient"><span><span> 8 Personas</span></span></label><label style="width: 25%"><img alt="">
												<input id="Comedor3" data-field-id="field10" type="radio" data-is-required="true" name="field10[]" value="16" class="validation-lenient"><span><span> 10 Personas</span></span></label></div></div></div></div>
							
								<div data-identifier="field11" data-index="1" style="width: 100%" class="even form-element form-element-field11 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
									<div class="form-element-html"><div><div style="background-color:" class="heading-cover field-cover "><div style="text-align: center; font-size: 1.8000000000000003em; padding-top: ; padding-bottom: ; color: #ff7f00" class="bold-false"><span>¿Living para cuántas personas?</span></div><input type="hidden" data-field-id="field11" name="field11[]" value="¿Living para cuántas personas?"></div></div></div>
									
								</div><div data-identifier="field13" data-index="2" style="width: 100%" class="form-element form-element-field13 options-false index-false form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
									<div class="form-element-html"><div><div class="images-true checkbox-cover field-cover"><span class="sub-label-false"><span class="main-label"></span><span class="sub-label"></span></span><div data-placement="right" data-toggle="tooltip" tooltip="" data-trigger="hover" data-html="true" data-original-title=""><span class="error"></span><label style="width: 25%" class="active"><img alt="" src="https://martinbonari.com/">
										<input id="living0" checked data-field-id="field13" type="radio" data-is-required="true" name="field13[]" value="0" class="validation-lenient"><span><span> Sin Living</span></span></label><label style="width: 25%"><img alt="">
											<input  id="living1" data-field-id="field13" type="radio" data-is-required="true" name="field13[]" value="13" class="validation-lenient"><span><span> 6 Personas</span></span></label><label style="width: 25%"><img alt="">
												<input id="living2" data-field-id="field13" type="radio" data-is-required="true" name="field13[]" value="18" class="validation-lenient"><span><span> 8 Personas</span></span></label><label style="width: 25%"><img alt="">
													<input id="living3" data-field-id="field13" type="radio" data-is-required="true" name="field13[]" value="20" class="validation-lenient"><span><span> 10 Personas</span></span></label></div></div></div></div>
							
									<div data-identifier="field14" data-index="1" style="width: 100%" class="even form-element form-element-field14 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
										<div class="form-element-html"><div><div style="background-color:" class="heading-cover field-cover "><div style="text-align: center; font-size: 1.7000000000000002em; padding-top: ; padding-bottom: ; color: #ff7f00" class="bold-false"><span>¿Garaje Para cuántos coches?</span></div><input type="hidden" data-field-id="field14" name="field14[]" value="¿Garaje Para cuántos coches?"></div></div></div>
										
									</div><div data-identifier="field18" data-index="2" style="width: 100%" class="form-element form-element-field18 options-true index-true form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
										<div class="form-element-html"><div><div class="images-true checkbox-cover field-cover"><span class="sub-label-false"><span class="main-label"></span><span class="sub-label"></span></span><div data-placement="right" data-toggle="tooltip" tooltip="" data-trigger="hover" data-html="true" data-original-title=""><span class="error"></span><label style="width: 25%"><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%200%200&#39;%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/NADA-e1656413596486.png"><noscript><img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/NADA-e1656413596486.png"></noscript>
											<input id="g0" checked data-field-id="field18" type="radio" data-is-required="true" name="field18[]" value="0" class="validation-lenient"><span><span> Sin Garaje</span></span></label><label style="width: 25%" class="active"><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%200%200&#39;%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/garaje-1-e1656413485778.png"><noscript><img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/garaje-1-e1656413485778.png"></noscript>
												<input id="g1"  data-field-id="field18" type="radio" data-is-required="true" name="field18[]" value="18" class="validation-lenient"><span><span> 1 Coche</span></span></label><label style="width: 25%"><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%200%200&#39;%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/garaje-doble-1-e1656413477429.png"><noscript><img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/garaje-doble-1-e1656413477429.png"></noscript>
												<input id="g2"  data-field-id="field18" type="radio" data-is-required="true" name="field18[]" value="35" class="validation-lenient"><span><span> 2 Coches</span></span></label><label style="width: 25%"><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%200%200&#39;%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/garaje-triple-1-e1656413468752.png"><noscript><img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/garaje-triple-1-e1656413468752.png"></noscript>
													<input id="g3"  data-field-id="field18" type="radio" data-is-required="true" name="field18[]" value="52" class="validation-lenient"><span><span> 3 Coches</span></span></label></div></div></div></div>
										
										<div data-identifier="field16" data-index="1" style="width: 100%" class="even form-element form-element-field16 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
											<div class="form-element-html"><div><div style="background-color:" class="heading-cover field-cover "><div style="text-align: center; font-size: 1.6em; padding-top: ; padding-bottom: ; color: #ff7f00" class="bold-false"><span>¿Cómo querés el Dormitorio Principal?</span></div>
											<input type="hidden" data-field-id="field16" name="field16[]" value="¿Cómo querés el Dormitorio Principal?"></div></div></div>
											
										</div><div data-identifier="field15" data-index="2" style="width: 100%" class="form-element form-element-field15 options-true index-true form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
											<div class="form-element-html"><div><div class="images-true checkbox-cover field-cover"><span class="sub-label-false"><span class="main-label"></span><span class="sub-label"></span></span><div data-placement="right" data-toggle="tooltip" tooltip="" data-trigger="hover" data-html="true" data-original-title=""><span class="error"></span><label style="width:" class="active"><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%200%200&#39;%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorios-simple-1-e1656413633429.png"><noscript><img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorios-simple-1-e1656413633429.png"></noscript>
												<input id="dp1" checked data-field-id="field15" type="radio" data-is-required="true" name="field15[]" value="14" class="validation-lenient"><span><span> Simple</span></span></label><label style="width:"><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%200%200&#39;%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorio-con-vestidor-1-e1656413643430.png"><noscript><img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorio-con-vestidor-1-e1656413643430.png"></noscript>
													<input id="dp2" data-field-id="field15" type="radio" data-is-required="true" name="field15[]" value="25" class="validation-lenient"><span><span> Con Vestidor</span></span></label></div></div></div></div>
							
											

											<div class="form-element-html"><div><div class="absolute-false customText-cover field-cover" style="left: ; top: ;right: ;bottom: ;color: #666666 !important; background-color:"><div class="full" style="text-align: left"></div>
											<input type="hidden" name="field72" data-field-id="field72"></div></div></div>
							
										</div><div data-identifier="field19" data-index="1" style="width: 100%" class="even form-element form-element-field19 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
											<div class="form-element-html"><div><div style="background-color:" class="heading-cover field-cover "><div style="text-align: center; font-size: 1.5em; padding-top: ; padding-bottom: ; color: #ff7f00" class="bold-false"><span>¿Y los Dormitorios Secundarios?</span></div>
											<input type="hidden" data-field-id="field19" name="field19[]" value="¿Y los Dormitorios Secundarios?"></div></div></div>
											
										</div><div data-identifier="field56" data-index="2" style="width: 33%" class="form-element form-element-field56 options-true index-true form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
											<div class="form-element-html"><div><div class="images-false checkbox-cover field-cover"><span class="sub-label-true"><span class="main-label"><span>De 1 cama</span></span><span class="sub-label"><p><img src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%200%200&#39;%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorio-simple-1-e1656413715365.png"><noscript><img src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorio-simple-1-e1656413715365.png"></noscript></p></span></span><div data-placement="right" data-toggle="tooltip" tooltip="" data-trigger="hover" data-html="true" data-original-title=""><span class="error"></span><label style="width:"><img alt="">
												<input id="ds10" checked data-field-id="field56" type="radio" data-is-required="true" name="field56[]" value="0" class="validation-lenient"><span><span>Ninguno</span></span></label><label style="width:"><img alt="">
													<input id="ds11" data-field-id="field56" type="radio" data-is-required="true" name="field56[]" value="10" class="validation-lenient"><span><span>1</span></span></label><label style="width:"><img alt="">
														<input id="ds12" data-field-id="field56" type="radio" data-is-required="true" name="field56[]" value="22" class="validation-lenient"><span><span>2</span></span></label><label style="width:" class="active"><img alt="">
															<input id="ds13" data-field-id="field56" type="radio" data-is-required="true" name="field56[]" value="34" class="validation-lenient"><span><span>3</span></span></label></div></div></div></div>
											
										</div><div data-identifier="field58" data-index="3" style="width: 33%" class="even form-element form-element-field58 options-false index-false form-element-3 default-false form-element-type-checkbox is-required-true -handle">
											<div class="form-element-html"><div><div class="images-false checkbox-cover field-cover"><span class="sub-label-true"><span class="main-label"><span>De 2 camas</span></span><span class="sub-label"><p><img src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%200%200&#39;%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorios-doble-1-e1656413726943.png"><noscript><img src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorios-doble-1-e1656413726943.png"></noscript></p></span></span><div data-placement="right" data-toggle="tooltip" tooltip="" data-trigger="hover" data-html="true" data-original-title=""><span class="error"></span><label style="width:"><img alt="">
												<input id="ds20" checked data-field-id="field58" type="radio" data-is-required="true" name="field58[]" value="0" class="validation-lenient"><span><span>Ninguno</span></span></label><label style="width:"><img alt="">
													<input id="ds21" data-field-id="field58" type="radio" data-is-required="true" name="field58[]" value="18" class="validation-lenient"><span><span>1</span></span></label><label style="width:"><img alt="">
														<input id="ds22"data-field-id="field58" type="radio" data-is-required="true" name="field58[]" value="36" class="validation-lenient"><span><span>2</span></span></label><label style="width:" class="active"><img alt="">
															<input id="ds23"data-field-id="field58" type="radio" data-is-required="true" name="field58[]" value="54" class="validation-lenient"><span><span>3</span></span></label><label style="width:"><img alt="">
																<input id="ds24" data-field-id="field58" type="radio" data-is-required="true" name="field58[]" value="72" class="validation-lenient"><span><span>4</span></span></label></div></div></div></div>
											
										</div><div data-identifier="field57" data-index="4" style="width: 33%" class="form-element form-element-field57 options-true index-true form-element-4 default-false form-element-type-checkbox is-required-true odd -handle">
											<div class="form-element-html"><div><div class="images-false checkbox-cover field-cover"><span class="sub-label-true"><span class="main-label"><span>De 3 camas</span></span><span class="sub-label"><p><img src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%200%200&#39;%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorio-triple-1-e1656413707687.png"><noscript><img src="https://martinbonari.com/wp-content/uploads/2022/06/dormitorio-triple-1-e1656413707687.png"></noscript></p></span></span><div data-placement="right" data-toggle="tooltip" tooltip="" data-trigger="hover" data-html="true" data-original-title=""><span class="error"></span><label style="width:"><img alt="">
												<input id="ds30" checked data-field-id="field57" type="radio" data-is-required="true" name="field57[]" value="0" class="validation-lenient"><span><span>Ninguno</span></span></label><label style="width:"><img alt="">
													<input id="ds31" data-field-id="field57" type="radio" data-is-required="true" name="field57[]" value="20" class="validation-lenient"><span><span>1</span></span></label><label style="width:"><img alt="">
														<input id="ds32" data-field-id="field57" type="radio" data-is-required="true" name="field57[]" value="44" class="validation-lenient"><span><span>2</span></span></label><label style="width:" class="active"><img alt="">
															<input id="ds33" data-field-id="field57" type="radio" data-is-required="true" name="field57[]" value="65" class="validation-lenient"><span><span>3</span></span></label></div></div></div></div>
											
										</div>

										<div data-identifier="field25" data-index="1" style="width: 100%" class="even form-element form-element-field25 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
											<div class="form-element-html"><div><div style="background-color:" class="heading-cover field-cover "><div style="text-align: center; font-size: 1.5em; padding-top: ; padding-bottom: ; color: #ff7f00" class="bold-false"><span>Otros Ambientes</span></div>
											<input type="hidden" data-field-id="field25" name="field25[]" value="Otros Ambientes"></div></div></div>
											
										</div><div data-identifier="field26" data-index="2" style="width: 100%" class="form-element form-element-field26 options-false index-false form-element-2 default-false form-element-type-checkbox is-required-false odd -handle">
											<div class="form-element-html"><div><div class="images-true checkbox-cover field-cover"><span class="sub-label-false"><span class="main-label"></span><span class="sub-label"></span></span><div data-placement="right" data-toggle="tooltip" tooltip="" data-trigger="hover" data-html="true" data-original-title=""><span class="error"></span><label style="width: 25%" class=""><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%200%200&#39;%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/deposito-1.png"><noscript><img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/deposito-1.png"></noscript>
												<input id="a0" che data-field-id="field26" type="checkbox" data-is-required="false" name="field26[]" value="8" class="validation-lenient"><span><span> Depósito pequeño</span></span></label><label style="width: 25%" class=""><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%200%200&#39;%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/playroom-1.png"><noscript><img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/playroom-1.png"></noscript>
													<input id="a1" data-field-id="field26" type="checkbox" data-is-required="false" name="field26[]" value="10" class="validation-lenient"><span><span> Estudio</span></span></label><label style="width: 25%" class=""><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%200%200&#39;%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/lavadero-1.png"><noscript><img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/lavadero-1.png"></noscript>
														<input id="a2" data-field-id="field26" type="checkbox" data-is-required="false" name="field26[]" value="6" class="validation-lenient"><span><span> Lavadero</span></span></label><label style="width: 25%" class="active"><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%200%200&#39;%3E%3C/svg%3E" data-lazy-src="https://martinbonari.com/wp-content/uploads/2022/06/estudio-1.png"><noscript><img alt="" src="https://martinbonari.com/wp-content/uploads/2022/06/estudio-1.png"></noscript>
															<input id="a3" data-field-id="field26" type="checkbox" data-is-required="false" name="field26[]" value="10" class="validation-lenient"><span><span> Playroom</span></span></label></div></div></div></div>
											<div data-identifier="field27" data-index="1" style="width: 100%" class="even form-element form-element-field27 options-false index-false form-element-1 default-false form-element-type-heading is-required-false -handle">
												<div class="form-element-html"><div><div style="background-color:" class="heading-cover field-cover "><div style="text-align: center; font-size: 1.6em; padding-top: ; padding-bottom: ; color: #ff7f00" class="bold-false"><span>¿Cuántas Plantas?</span></div>
												<input type="hidden" data-field-id="field27" name="field27[]" value="¿Cuántas Plantas?"></div></div></div>
												
											</div><div data-identifier="field28" data-index="2" style="width: 100%" class="form-element form-element-field28 options-false index-false form-element-2 default-false form-element-type-checkbox is-required-true odd -handle">
												<div class="form-element-html"><div><div class="images-true checkbox-cover field-cover"><span class="sub-label-false"><span class="main-label"></span><span class="sub-label"></span></span><div data-placement="right" data-toggle="tooltip" tooltip="" data-trigger="hover" data-html="true" data-original-title=""><span class="error"></span><label style="width:"><img alt="" src="https://martinbonari.com/">
													<input id="p1" checked data-field-id="field28" type="radio" data-is-required="true" name="field28[]" value="0" class="validation-lenient"><span><span> 1 Planta</span></span></label><label style="width:"><img alt="">
														<input id="p2" data-field-id="field28" type="radio" data-is-required="true" name="field28[]" value="6" class="validation-lenient"><span><span> 2 Plantas</span></span></label><label style="width:" class="active"><img alt="">
															<input id="p3" data-field-id="field28" type="radio" data-is-required="true" name="field28[]" value="12" class="validation-lenient"><span><span> 3 Plantas</span></span></label></div></div></div></div>
												


												<button onclick="check()" class="button" style=""><a href="#descargar" style="text-decoration:none;color: white;"> ver presupusto</a></button>



<div style="background-color:margin-top:5rem; padding:10% ;"><h2 id="q1" style="color:black!important;"></h2></div>



<div class="containerx" id="descargar">
	<h2 style="color: black;">Descargar PDF Con Presupuesto </h2>
	<div class="price-row" style="margin-top: 0%;">
		<div class="price-col">
			<h2>Presupuesto Basico</h2>
			<h3>$ 0</h3>
			<ul style="margin-bottom:12rem;">
				<li>metros cuadrados</li>
				<li>estimado del costo </li>
				
			</ul>
			<button>Ver</button>
		</div>
		<div class="price-col">
			<h2>Presupuesto Desglosado</h2>
			<h3>$ 19.99</h3>
			<ul>
				<li>imprimir Informe</li>
				<li>metros cuadrados</li>
				<li>costo por estapa</li>
				<li>precion indirectos</li>
				<li>estimado de tiempo</li>
				<li>calidad de materiales</li>
				<li>calendario de trabajo</li>
				
			</ul>
			<button>Ver</button>
		</div>
		

	</div>
</div>

<style>


*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Poppins',sans-serif;
}
.containerx{
	width: 100%;
	min-height: 90vh;
	background: whitesmoke;
}
.containerx h2{
	color: #000000;
	font-size:32px;
	padding:25px 0;
	text-align: center;
}
.price-row{
	width: 90%;
	max-width: 1100px;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-gap: 25px;
}
.price-col{
	background: darkcyan;
	padding: 10% 15%;
	border-radius: 10px;
	color: #fff;
	text-align: center;
}
.price-col p{
	font-size: 22px;
}
.price-col h3{
	font-size: 44px;
	margin: 20px 0 40px;
	font-weight: 500;
}
.price-col h3 span{
	font-size: 16px;
}
.price-col ul{
	text-align: left;
	margin: 20px 0;
	color: white;
	list-style-type: none;  
	
}
.price-col ul li{
	margin: 15px 0 ;
	text-transform: capitalize;
	size: 15px;
	font-size:80%;
}
.price-col button{
	width: 100%;
	padding: 14px 0;
	background: transparent;
	color: #fff;
	font-size: 15px;
	border: 1px solid #fff;
	border-radius: 6px;
	cursor: pointer;
	transition: background 0.5s;
	
}
.price-col button:hover{
	background: rgba(1, 204, 204, 0.836);
	color: black;
}



</style>



												
												
												
											<div id="qwe">


												<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

												<canvas id="myChart" style="width:0.100%;max-width:0.600px"></canvas>
												
												


											</div>


												
																					
												
												
												
												
												
												<script type="text/javascript" src="index.js" ></script>



							
							
	
				
		



		




</div></div>
</div>		</div>
			</div>
</div>

</main>

</div>
	

<script type="text/javascript" src="./index_files/form.min.js.descarga" id="fc-form-js-js"></script>
<script type="text/javascript" id="fcmp-form-js-js-extra">
/* <![CDATA[ */
var FCMP = [""];
/* ]]> */
</script>
<script type="text/javascript" src="./index_files/form-multi-page.js.descarga" id="fcmp-form-js-js"></script>
    <script>
    jQuery(document).ready(function() {
      
    });
    </script>
    <script>window.lazyLoadOptions = {
                elements_selector: "img[data-lazy-src],.rocket-lazyload,iframe[data-lazy-src]",
                data_src: "lazy-src",
                data_srcset: "lazy-srcset",
                data_sizes: "lazy-sizes",
                class_loading: "lazyloading",
                class_loaded: "lazyloaded",
                threshold: 300,
                callback_loaded: function(element) {
                    if ( element.tagName === "IFRAME" && element.dataset.rocketLazyload == "fitvidscompatible" ) {
                        if (element.classList.contains("lazyloaded") ) {
                            if (typeof window.jQuery != "undefined") {
                                if (jQuery.fn.fitVids) {
                                    jQuery(element).parent().fitVids();
                                }
                            }
                        }
                    }
                }};
        window.addEventListener('LazyLoad::Initialized', function (e) {
            var lazyLoadInstance = e.detail.instance;

            if (window.MutationObserver) {
                var observer = new MutationObserver(function(mutations) {
                    var image_count = 0;
                    var iframe_count = 0;
                    var rocketlazy_count = 0;

                    mutations.forEach(function(mutation) {
                        for (i = 0; i < mutation.addedNodes.length; i++) {
                            if (typeof mutation.addedNodes[i].getElementsByTagName !== 'function') {
                                return;
                            }

                           if (typeof mutation.addedNodes[i].getElementsByClassName !== 'function') {
                                return;
                            }

                            images = mutation.addedNodes[i].getElementsByTagName('img');
                            is_image = mutation.addedNodes[i].tagName == "IMG";
                            iframes = mutation.addedNodes[i].getElementsByTagName('iframe');
                            is_iframe = mutation.addedNodes[i].tagName == "IFRAME";
                            rocket_lazy = mutation.addedNodes[i].getElementsByClassName('rocket-lazyload');

                            image_count += images.length;
			                iframe_count += iframes.length;
			                rocketlazy_count += rocket_lazy.length;

                            if(is_image){
                                image_count += 1;
                            }

                            if(is_iframe){
                                iframe_count += 1;
                            }
                        }
                    } );

                    if(image_count > 0 || iframe_count > 0 || rocketlazy_count > 0){
                        lazyLoadInstance.update();
                    }
                } );

                var b      = document.getElementsByTagName("body")[0];
                var config = { childList: true, subtree: true };

                observer.observe(b, config);
            }
        }, false);</script><script data-no-minify="1" async="" src="./index_files/lazyload.min.js.descarga"></script><script>function lazyLoadThumb(e){var t='<img loading="lazy" data-lazy-src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"><noscript><img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"></noscript>',a='<div class="play"></div>';return t.replace("ID",e)+a}function lazyLoadYoutubeIframe(){var e=document.createElement("iframe"),t="ID?autoplay=1";t+=0===this.dataset.query.length?'':'&'+this.dataset.query;e.setAttribute("src",t.replace("ID",this.dataset.src)),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen","1"),e.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),this.parentNode.replaceChild(e,this)}document.addEventListener("DOMContentLoaded",function(){var e,t,a=document.getElementsByClassName("rll-youtube-player");for(t=0;t<a.length;t++)e=document.createElement("div"),e.setAttribute("data-id",a[t].dataset.id),e.setAttribute("data-query", a[t].dataset.query),e.setAttribute("data-src", a[t].dataset.src),e.innerHTML=lazyLoadThumb(a[t].dataset.id),e.onclick=lazyLoadYoutubeIframe,a[t].appendChild(e)});</script>




<img src="footer.png" alt="">
</body>
		
      
   
  );
}

Dashboard.getLayout = (page: ReactNode) => (
  <AuthenticatedLayout title="Hi, Welcome back">{page}</AuthenticatedLayout>
);
