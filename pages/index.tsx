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
     
   
  );
}

Dashboard.getLayout = (page: ReactNode) => (
  <AuthenticatedLayout title="Hi, Welcome back">{page}</AuthenticatedLayout>
);
