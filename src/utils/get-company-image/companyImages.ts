import vabako from '@/public/companies/vabako.png';
import scandiweb from '@/public/companies/scandiweb.png';
import neollet from '@/public/companies/neollet.png';
import awarmoesakartveloshi from '@/public/companies/awarmoesakartveloshi.jpg';
import unipay from '@/public/companies/unipay.png';
import gulf from '@/public/companies/gulf.png';
import bits63 from '@/public/companies/bits63.jpg';
import georgiatechtbilisi from '@/public/companies/georgiatechtbilisi.png';
import appidea from '@/public/companies/appidea.png';
import vendoo from '@/public/companies/vendoo.png';
import oodnev from '@/public/companies/oodnev.png';
import lemondo from '@/public/companies/lemondo.png';
import sakartvelosmelioracia from '@/public/companies/sakartvelosmelioracia.png';
import dexfinity from '@/public/companies/dexfinity.png';
import irao from '@/public/companies/irao.jpg';
import nlycdev from '@/public/companies/nlycdev.png';
import linton from '@/public/companies/linton.png';
import dinespace from '@/public/companies/dinespace.png';
import coachnow from '@/public/companies/coachnow.jpg';
import helixnebulacapital from '@/public/companies/helixnebulacapital.jpg';
import exadel from '@/public/companies/exadel.png';
import tazetech from '@/public/companies/tazetech.png';
import exactpro from '@/public/companies/exactpro.png';
import smartweb from '@/public/companies/smartweb.png';
import twino from '@/public/companies/twino.png';
import edutechgeo from '@/public/companies/edutechgeo.png';
import tbcBank from '@/public/companies/tbc.png';
import bog from '@/public/companies/bog.png';
import libertybank from '@/public/companies/liberty.png';
import citypay from '@/public/companies/citypay.jpg';
import crocobet from '@/public/companies/crocobet.png';
import pulsarai from '@/public/companies/pulsarai.png';
import qarva from '@/public/companies/qarva.png';
import altexsoft from '@/public/companies/altexsoft.png';
import space from '@/public/companies/space.png';
import epam from '@/public/companies/epam2.png';
import flatrock from '@/public/companies/flatrock.png';
import optioai from '@/public/companies/optioai.jpeg';
import spinom from '@/public/companies/spinom.png';
import tnet from '@/public/companies/tnet.png';
import credo from '@/public/companies/credo.png';
import sajaroreestri from '@/public/companies/sajaroreestri.jpg';
import azry from '@/public/companies/azry.png';
import omedia from '@/public/companies/omedia.png';
import redberry from '@/public/companies/redberry.png';
import sweeftdigital from '@/public/companies/sweeftdigital.png';
import websense from '@/public/companies/websense.jpg';
import noxtton from '@/public/companies/noxtton.png';
import gegidze from '@/public/companies/gegidze.jpg';
import lavapi from '@/public/companies/lavapi.jpg';
import betlive from '@/public/companies/betlive.png';
import pasha from '@/public/companies/pasha.png';
import payze from '@/public/companies/payze.png';
import theneo from '@/public/companies/theneo.jpg';
import lineate from '@/public/companies/lineate.png';
import cactussoft from '@/public/companies/cactussoft.jpg';
import arttteo from '@/public/companies/arttteo.jpg';
import binance from '@/public/companies/binance.png';
import crosscreators from '@/public/companies/crosscreators.png';
import upgaming from '@/public/companies/upgaming.png';
import velistore from '@/public/companies/velistore.png';
import unisoft from '@/public/companies/unisoft.png';

import { StaticImageData } from 'next/image';

class CompanyImageData {
  names: string[];
  image: StaticImageData;

  constructor(names: string[], image: StaticImageData) {
    this.names = names;
    this.image = image;
  }
}

export const companyImages2: Record<string, StaticImageData> = {
  ვაბაკო: vabako,
  // DataArt: dataart,
  Scandiweb: scandiweb,
  Neollet: neollet,
  'აწარმოე საქართველოში': awarmoesakartveloshi,
  UniPAY: unipay,
  Gulf: gulf,
  Appidea: appidea,
  '63BITS': bits63,
  'Georgia Tech Tbilisi': georgiatechtbilisi,
  Vendoo: vendoo,
  Lemondo: lemondo,
  'საქართველოს მელიორაცია': sakartvelosmelioracia,
  Dexfinity: dexfinity,
  IRAO: irao,
  NLYC: nlycdev,
  'Linton Group': linton,
  Dinespace: dinespace,
  CoachNow: coachnow,
  'Helix Nebula Capital': helixnebulacapital,
  Exadel: exadel,
  'TAZE Technologies': tazetech,
  Exactpro: exactpro,
  SmartWeb: smartweb,
  Twino: twino,
  'საგანმანათლებლო ტექნოლოგიები საქართველო': edutechgeo,
  'საჯარო რეესტრის ეროვნული სააგენტო': sajaroreestri,
  'TBC Bank': tbcBank,
  'Bank Of Georgia': bog,
  'Liberty Bank': libertybank,
  CityPay: citypay,
  Crocobet: crocobet,
  'Pulsar AI': pulsarai,
  AltexSoft: altexsoft,
  Qarva: qarva,
  Space: space,
  Epam: epam,
  'Flat Rock Technology': flatrock,
  oodneV: oodnev,
  'Optio.Ai': optioai,
  'Spinom Digital': spinom,
  TNET: tnet,
  'Credo Bank': credo,
  AzRy: azry,
  Omedia: omedia,
  REDBERRY: redberry,
  'Sweeft Digital': sweeftdigital,
  Websense: websense,
  Noxtton: noxtton,
  'Gegidze • გეგიძე': gegidze,
  LavaPi: lavapi,
  Betlive: betlive,
  'Pasha Bank': pasha,
  Payze: payze,
  Theneo: theneo,
  Lineate: lineate,
  CactusSoft: cactussoft,
  Arttteo: arttteo,
  Binance: binance,
  'Cross Creators': crosscreators,
  UpGaming: upgaming,
  'Veli.Store': velistore,
  Unisoft: unisoft,
};

const companyImageNames = {
  vabako: new CompanyImageData(['ვაბაკო'], vabako),
  scandiweb: new CompanyImageData(['Scandiweb'], scandiweb),
  neollet: new CompanyImageData(['ნეოლეთი'], neollet),
  awarmoesakartveloshi: new CompanyImageData(['აწარმოე საქართველოში'], awarmoesakartveloshi),
  unipay: new CompanyImageData(['unipay', 'უნიფეი'], unipay),
  gulf: new CompanyImageData(['Gulf Georgia'], gulf),
  appidea: new CompanyImageData(['Appidea.com', 'appidea'], appidea),
  '63bits': new CompanyImageData(['63BITS'], bits63),
  georgiatechtbilisi: new CompanyImageData(['Georgia Tech Tbilisi'], georgiatechtbilisi),
  vendoo: new CompanyImageData(['Vendoo'], vendoo),
  lemondo: new CompanyImageData(['Lemondo'], lemondo),
  sakartvelosmelioracia: new CompanyImageData(['საქართველოს მელიორაცია'], sakartvelosmelioracia),
  dexfinity: new CompanyImageData(['Dexfinity'], dexfinity),
  irao: new CompanyImageData(['IRAO'], irao),
  nlycdev: new CompanyImageData(['nlyc.dev'], nlycdev),
  linton: new CompanyImageData(['Linton Group'], linton),
  dinespace: new CompanyImageData(['Dinespace'], dinespace),
  coachnow: new CompanyImageData(['CoachNow'], coachnow),
  helixnebulacapital: new CompanyImageData(['Helix Nebula Capital'], helixnebulacapital),
  exadel: new CompanyImageData(['Exadel Georgia', 'Exadel'], exadel),
  tazetech: new CompanyImageData(['TAZE Technologies'], tazetech),
  exactpro: new CompanyImageData(['Exactpro'], exactpro),
  smartweb: new CompanyImageData(['smartweb'], smartweb),
  twino: new CompanyImageData(['ტვინო'], twino),
  edutechgeo: new CompanyImageData(['საგანმანათლებლო ტექნოლოგიები საქართველო'], edutechgeo),
  tbcbank: new CompanyImageData(['TBC bank'], tbcBank),
};

export default companyImageNames;
