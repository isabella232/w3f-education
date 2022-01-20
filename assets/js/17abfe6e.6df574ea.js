"use strict";(self.webpackChunkpolkadot_mooc=self.webpackChunkpolkadot_mooc||[]).push([[2156],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6918:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"account",sidebar_position:1},s="A for Account",u={unversionedId:"AtoZ/account",id:"AtoZ/account",isDocsHomePage:!1,title:"A for Account",description:"What is an account?",source:"@site/docs/AtoZ/account.md",sourceDirName:"AtoZ",slug:"/AtoZ/account",permalink:"/w3f-education/docs/AtoZ/account",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/account.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1641481483,formattedLastUpdatedAt:"1/6/2022",sidebarPosition:1,frontMatter:{id:"account",sidebar_position:1},sidebar:"atoz",previous:{title:"W3F A - Z ELI5 series",permalink:"/w3f-education/docs/introatoz"},next:{title:"B for Bridge",permalink:"/w3f-education/docs/AtoZ/bridge"}},l=[{value:"What is an account?",id:"what-is-an-account",children:[]},{value:"Creating an account",id:"creating-an-account",children:[]},{value:"Portability",id:"portability",children:[]}],d={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"a-for-account"},"A for Account"),(0,o.kt)("h2",{id:"what-is-an-account"},"What is an account?"),(0,o.kt)("p",null,"Accounts are also sometimes referred to as wallets or addresses. On blockchains we need a place to hold our assets, and this is what accounts are used for. A user can have many accounts, and on Polkadot and Kusama, unlike most other public blockchains we can even give accounts on-chain, authenticated, and human readable identities if we would like to."),(0,o.kt)("p",null,"What a Polkadot account public key looks like:\n14dQ7nC8YabzseZ5iqvG4EQnrkTCsUCwMbCP6nQWeKgjF6Ye"),(0,o.kt)("p",null,"Accounts on Polkadot and Kusama are SS58 encoded key-network pairs. By representing an address as a combination of keys and network IDs, it makes sending assets to an address that is unusable much less likely (Ethereum only uses keys; imagine sending ETH from Ethereum mainnet to an account that only exists on Binance Smart Chain, which is another EVM-based chain, and being confused as to why you can\u2019t see the ETH on Binance Smart Chain). SS58 is a slight modification of the Bitcoin Base-58-Check encoding. By using different address prefixes, we can easily tell if an account is on the same chain as another. For example, Polkadot addresses start with a 1, Kusama is always with a capital letter, generic substrate addresses will start with a 5."),(0,o.kt)("h2",{id:"creating-an-account"},"Creating an account"),(0,o.kt)("p",null,"Just like any other blockchain address, Polkadot and Kusama accounts are controlled with public private key pairs. This is a cryptographic way of creating a public facing id that is intrinsically linked to a private id, which should be kept secret. The address generation starts with a mnemonic phrase which is then converted into a public-private key pair. Because different wallets use different ways to derive the public and private keys from the mnemonic phrase, there can be issues with deriving the same public and private key pairs from the same mnemonic on different wallets."),(0,o.kt)("p",null,"What a mnemonic phrase looks like:\nway pumpkin card castle crystal domain mystery chalk dog twin chronic image"),(0,o.kt)("h2",{id:"portability"},"Portability"),(0,o.kt)("p",null," Accounts can also be utilized across Substrate chains. Since addresses are the result of encoding a public key and a network ID, we can create an address for another chain by decoding the address, changing the network ID, and encoding the key with the new network ID, resulting in a new address that is controlled by the same underlying key. This allows you to use one mnemonic phrase across multiple Substrate chains."))}p.isMDXComponent=!0}}]);