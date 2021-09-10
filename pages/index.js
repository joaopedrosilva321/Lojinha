import { useState } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'

import MultiRangeSlider from '../components/MultiRangeSlider'
import Checkbox from '../components/Checkbox'

// Datas 
const dataMenu = [
  { id: 0, label: "Padaria", options: [] }, { id: 1, label: "Frutas e vegetais", options: [] },
  { id: 2, label: "Carne e peixe", options: [] }, { id: 3, label: "Bebidas", options: [] },
  { id: 4, label: "Cozinha", options: [] }, { id: 5, label: "Nutrição especial", options: [] },
  // { id: 6, label: "Bebê", options: [] }, { id: 7, label: "Farmacia", options: [] }
]

const dataPostagens = [
  { id: 0, label: "Manga", price: "2,99", beforePrice: "3,99", img: "/files/05.jpg", star: [{ state: true, }, { state: true }, { state: true }, { state: true }, { state: false }] },
  { id: 1, label: "Abobrinha", price: "8,99", beforePrice: "12,27", img: "/files/04.jpg", star: [{ state: true }, { state: true }, { state: true }, { state: true }, { state: false }] },
  { id: 2, label: "Banana", price: "6,49", beforePrice: "7,25", img: "/files/01.jpg", star: [{ state: true }, { state: true }, { state: true }, { state: true }, { state: false }] },
  { id: 3, label: "Morango", price: "4,99", beforePrice: "6,99", img: "/files/07.jpg", star: [{ state: true }, { state: true }, { state: true }, { state: true }, { state: true }] },
  { id: 4, label: "Chuchu", price: "5,99", beforePrice: "7,99", img: "/files/10.jpg", star: [{ state: true }, { state: true }, { state: true }, { state: true }, { state: false }] }
]

// Styles Defaults

const Flex = styled.div`
  display: flex;
`

const FlexAlign = styled(Flex)`
  align-items: ${props => props.alignItems || "center"};
`

const FlexJustifyContent = styled(Flex)`
  justify-content: ${props => props.justifyContent || "center"};
`

const Input = styled.input`
  background: transparent;
  border: 0;
  outline: 0;
`

// Styles Header
const Logo = styled.div`

`

const MenuMobile = styled.div`
  display: none;
`

const MenuMobileLabel = styled.div`
  display: none;
`

const Header = styled.div`
  padding: 40px 0;
  width: 100%;
  margin: 0 auto;
`

const HeaderInput = styled.div`
  height: 42px;
  background: #F9F9F9;
  border: 1px solid #D1D1D1;
  box-sizing: border-box;
  border-radius: 12px;

  align-items: center;
  padding: 0 16px;
`

const HeaderInputLabel = styled.div`
  color: #151515;
  font-weight: 700;
`

const HeaderInputLabelSvg = styled.div`
  color: #151515;
  font-weight: 700;
`

const HeaderInputClean = styled.div`
  height: 20px;
  border: 1px solid #D1D1D1;
  margin: 0 24px;
`

// Styles Nav

const Nav = styled.div`
  height: 55px;
  background: #F9F9F9;
  user-select: none;
`

const NavContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`

const NavUl = styled.ul`
  list-style: none;
`

const NavLi = styled.li`
  font-weight: 500;
  cursor: pointer;
`

// Styles Navigations

const Navigations = styled.div`
  width: 100%;
  margin: 0 auto;
  `

const NavigationsPages = styled.div`
  width: 100%;
  margin: 0 auto;
`

// Styles Heading

const HeadingAside = styled.div`
  height: 18px; 
  user-select: "none";
`

const Heading = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 64px;
`

const HeadingSpan = styled.span`
  color: #A9A9A9;
  font-size: 12px;
`

// Styles Filter

const Filter = styled.div`
`

// Styles Main Content

const Aside = styled.div`
  min-width: 260px;
`

// Styles Aside

const Button = styled.div`
width: ${props => props.width || "auto"};
height: 48px;
background: #6A983C;
border: 2px solid #46760A;
border-radius: 12px;
font-size: 15px;
color: #FFFFFF;
font-weight: 600;
display: flex;
align-items: center;
justify-content: center;
user-select: none;
cursor: pointer;
`
const AsideButtonReset = styled.div`
width: 78px;
height: 48px;
border-radius: 12px;
color: #A9A9A9;
font-weight: 600;
font-size: 15px;
display: flex;
align-items: center;
justify-content: center;
user-select: none;
cursor: pointer;
`


// Styles Main

const Main = styled.main`
  padding: 40px 0;
  max-width: 100%;
  margin: 0 auto;
`

const MainImage = styled.div`
  height: 180px;
  width: 230px;
  background: #F9F9F9;
  border-radius: 12px;
  position: relative;
  borderRadius: inherit;
  overflow: hidden;
  margin: 0 0 0 10px;
`

const Description = styled.div`
  margin: 16px 0 0 0;
  // width: 269px;
  // height: 212px;
`

const OptionsButton = styled.div``

const MainContainer = styled.div`
  // width: 870px;
  // margin: 0 32px;
`

// Styles Footer

const Footer = styled.div``

// Styles Tags

const Tags = styled.div`
    cursor: pointer;
    margin-top: 48px
`

// Styles Copyright

const Copyright = styled.div``

// Styles Responsive

const Container = styled.div`
max-width: 1170px;
margin: 0 auto;

@media (max-width: 1216px){
    margin: 0 16px;
}

@media (max-width: 865px){
  margin: 0 16px;

  ${Header}{
    width: 100%;
    padding: 12px 0;

    & > div {
      justify-content: space-between;
    }
    

  }

  ${HeaderInput}{
     display: none;
  }

  ${Navigations}{
  
    width: auto;
  
  };

  ${Heading}{

    height: auto;
    width: auto;

    & > div {
      display: block;
    }

    ${HeadingAside}{
      margin-top: 8px;
    }

  }

  ${Main}{
    width: auto;
    padding: 16px 0;

    ${HeadingAside}{
      margin-top: 8px;
    }
    ${Aside}{
      display: none;
    }
  }
  

  ${MenuMobile} {
    display: block;
  }

  ${MenuMobileLabel} {
    display: block;
    margin: 8px 24px 0 16px;
    font-size: 14px;
    font-weight: 500;
    color: rgb(169,169,169);
    user-select: none;
  }

  ${Nav}{
    z-index: 1;
    position: absolute;
    display: none;
    left: 0;
    width: 100vw;
    height: auto;
    top: 62px;
    box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 5%);

    ${NavContainer} > ul > div{
     display: block; 
    }

    ${NavContainer} > ul {
     width: 100%;
    }
    
    ${NavLi}{
      padding: 8px 16px;
      width: 100%;
    }
  }

  ${MainContainer} {

    width: 100%;
    margin: auto;
    
    & > div{
      
      display: flex;
    }

    ${MainImage} {
      margin: auto;
    }

    ${Description}{
      width: auto;
      margin: 0;

      & > div{
        width: auto !important;
        margin: 0 24px !important;
      }

    }

    ${OptionsButton}{
      display: flex;
      justify-content: space-between;
      margin: 0 24px !important;
    }

  }

  ${NavigationsPages} {
    width: auto;
    & > div{
        
      flex-direction: column-reverse;

      & > div:nth-child(2){
        margin: 16px 0;
      }

    } 
  }
  ${Footer} > div{
    flex-wrap: wrap;

    & > div {
      margin: 0 0 16px 0;
    }

  }

  ${Tags}{
    margin: 0;
  }

  ${Copyright} > div {
    margin: 24px 0 !important;
  }

}
`

export default function Home() {

  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(true)
  const [checked3, setChecked3] = useState(true)
  const [checked4, setChecked4] = useState(false)
  const [checked5, setChecked5] = useState(false)

  const [checkedStar, setCheckedStar] = useState(false)
  const [checkedStar2, setCheckedStar2] = useState(false)
  const [checkedStar3, setCheckedStar3] = useState(false)
  const [checkedStar4, setCheckedStar4] = useState(false)
  const [checkedStar5, setCheckedStar5] = useState(false)

  const [menuMobile, setMenuMobile] = useState(true)

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Container>

        <Header>
          <FlexAlign as={FlexJustifyContent} justifyContent="space-between" style={{ height: 50 }}>

            <MenuMobile onClick={() => setMenuMobile(e => !e)}>
              <div style={{ cursor: "pointer" }}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24"><rect y="11" width="24" height="2" rx="1" /><rect y="4" width="24" height="2" rx="1" /><rect y="18" width="24" height="2" rx="1" /></svg>

                </span>
              </div>
            </MenuMobile>

            <Logo style={{ cursor: "pointer" }}>
              <svg width="177" height="18" viewBox="0 0 177 18" fill="none">
                <path d="M3.87168 10.7609H10.4051V7.23913H3.87168V3.52174H11.857V0H0V17.6087H3.87168V10.7609Z" fill="#151515" />
                <path d="M13.1832 11.0054V17.6087H16.8129V11.0054C16.8129 8.97554 18.4342 7.33696 20.4426 7.33696V4.01087H19.9586C15.9418 4.01087 13.1832 7.1413 13.1832 11.0054Z" fill="#151515" />
                <path d="M28.5574 4.01087C24.5406 4.01087 21.298 7.1413 21.298 11.0054C21.298 14.8696 24.5406 18 28.5574 18C31.7516 18 34.4618 16.019 35.4297 13.2554H31.4128C30.7595 14.1114 29.7189 14.6739 28.5574 14.6739C26.9846 14.6739 25.6779 13.6712 25.1455 12.2772H35.6959C35.7685 11.8614 35.8169 11.4457 35.8169 11.0054C35.8169 7.1413 32.5743 4.01087 28.5574 4.01087ZM25.1455 9.7337C25.6779 8.33967 26.9846 7.33696 28.5574 7.33696C30.1061 7.33696 31.437 8.33967 31.9694 9.7337H25.1455Z" fill="#151515" />
                <path d="M43.7453 9.83152C42.3418 9.66033 40.7447 9.04891 40.7447 8.2663C40.7447 7.38587 41.4949 7.09239 42.2934 7.09239C43.0919 7.09239 43.8421 7.38587 43.8421 8.51087H47.4718C47.4718 5.67391 45.1004 4.01087 42.2934 4.01087C39.4864 4.01087 37.115 5.67391 37.115 8.36413C37.115 10.4429 39.559 12.0082 42.0998 12.3261C43.1887 12.4728 43.9873 13.0353 43.9873 13.6467C43.9873 14.5027 43.0919 14.9185 42.2934 14.9185C41.4949 14.9185 40.5995 14.625 40.5995 13.5H36.9698C36.9698 16.337 39.4864 18 42.2934 18C45.1004 18 47.617 16.337 47.617 13.5C47.617 11.2745 45.6569 10.0516 43.7453 9.83152Z" fill="#151515" />
                <path d="M56.2821 4.01087C55.0722 4.01087 53.9833 4.45109 53.1364 5.18478V0H49.5067V17.6087H53.1364V10.981C53.1364 8.97554 54.2737 7.33696 56.2821 7.33696C58.2906 7.33696 59.4279 8.97554 59.4279 11.0054V17.6087H63.0576V11.0054C63.0576 7.1413 60.299 4.01087 56.2821 4.01087Z" fill="#151515" />
                <path d="M72.0175 4.01087C68.0006 4.01087 65.242 7.1413 65.242 11.0054V17.6087H68.8717V11.0054C68.8717 8.97554 70.009 7.33696 72.0175 7.33696C74.0259 7.33696 75.1632 8.97554 75.1632 11.0054V17.6087H78.7929V11.0054C78.7929 7.1413 76.0343 4.01087 72.0175 4.01087Z" fill="#151515" />
                <path d="M87.6346 4.01087C83.6178 4.01087 80.3752 7.1413 80.3752 11.0054C80.3752 14.8696 83.6178 18 87.6346 18C90.8288 18 93.539 16.019 94.5069 13.2554H90.49C89.8367 14.1114 88.7962 14.6739 87.6346 14.6739C86.0618 14.6739 84.7551 13.6712 84.2227 12.2772H94.7731C94.8457 11.8614 94.8941 11.4457 94.8941 11.0054C94.8941 7.1413 91.6515 4.01087 87.6346 4.01087ZM84.2227 9.7337C84.7551 8.33967 86.0618 7.33696 87.6346 7.33696C89.1833 7.33696 90.5142 8.33967 91.0466 9.7337H84.2227Z" fill="#151515" />
                <path d="M102.822 9.83152C101.419 9.66033 99.8219 9.04891 99.8219 8.2663C99.8219 7.38587 100.572 7.09239 101.371 7.09239C102.169 7.09239 102.919 7.38587 102.919 8.51087H106.549C106.549 5.67391 104.178 4.01087 101.371 4.01087C98.5636 4.01087 96.1922 5.67391 96.1922 8.36413C96.1922 10.4429 98.6362 12.0082 101.177 12.3261C102.266 12.4728 103.064 13.0353 103.064 13.6467C103.064 14.5027 102.169 14.9185 101.371 14.9185C100.572 14.9185 99.6768 14.625 99.6768 13.5H96.047C96.047 16.337 98.5636 18 101.371 18C104.178 18 106.694 16.337 106.694 13.5C106.694 11.2745 104.734 10.0516 102.822 9.83152Z" fill="#151515" />
                <path d="M115.117 4.01087C111.1 4.01087 107.858 7.1413 107.858 11.0054C107.858 14.8696 111.1 18 115.117 18C118.311 18 121.022 16.019 121.99 13.2554H117.973C117.319 14.1114 116.279 14.6739 115.117 14.6739C113.544 14.6739 112.238 13.6712 111.705 12.2772H122.256C122.328 11.8614 122.377 11.4457 122.377 11.0054C122.377 7.1413 119.134 4.01087 115.117 4.01087ZM111.705 9.7337C112.238 8.33967 113.544 7.33696 115.117 7.33696C116.666 7.33696 117.997 8.33967 118.529 9.7337H111.705Z" fill="#151515" />
                <path d="M130.596 7.33696C131.999 7.33696 133.185 8.11957 133.814 9.29348H137.637C136.839 6.26087 133.983 4.01087 130.596 4.01087C126.579 4.01087 123.336 7.1413 123.336 11.0054C123.336 14.8696 126.579 18 130.596 18C133.959 18 136.766 15.7989 137.589 12.8152H133.693C133.088 13.9158 131.951 14.6739 130.596 14.6739C128.587 14.6739 126.966 13.0353 126.966 11.0054C126.966 8.97554 128.587 7.33696 130.596 7.33696Z" fill="#151515" />
                <path d="M152.929 11.0054C152.929 7.1413 149.711 4.01087 145.718 4.01087C141.726 4.01087 138.507 7.1413 138.507 11.0054C138.507 14.8696 141.726 18 145.718 18C149.711 18 152.929 14.8696 152.929 11.0054ZM149.3 11.0054C149.3 13.0353 147.702 14.6739 145.718 14.6739C143.734 14.6739 142.137 13.0353 142.137 11.0054C142.137 8.97554 143.734 7.33696 145.718 7.33696C147.702 7.33696 149.3 8.97554 149.3 11.0054Z" fill="#151515" />
                <path d="M170.467 4.01087C168.579 4.01087 166.885 4.86685 165.748 6.23641C164.611 4.86685 162.917 4.01087 161.029 4.01087C157.012 4.01087 154.496 7.1413 154.496 11.0054V17.6087H158.126V11.0054C158.126 8.97554 159.021 7.33696 161.029 7.33696C163.038 7.33696 163.933 8.97554 163.933 11.0054V17.6087H167.563V11.0054C167.563 8.97554 168.458 7.33696 170.467 7.33696C172.475 7.33696 173.37 8.97554 173.37 11.0054V17.6087H177V11.0054C177 7.1413 174.483 4.01087 170.467 4.01087Z" fill="#151515" />
              </svg>
            </Logo>

            <HeaderInput as={Flex}>

              <Flex style={{ cursor: "pointer" }}>
                <HeaderInputLabel style={{ userSelect: "none" }}>
                  <span>All categories</span>
                </HeaderInputLabel>
                <HeaderInputLabelSvg as={FlexAlign} style={{ marginLeft: 8 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4.8125 6.53326L7.5525 9.27326C7.67741 9.39743 7.84638 9.46712 8.0225 9.46712C8.19862 9.46712 8.36759 9.39743 8.4925 9.27326L11.1592 6.6066" stroke="#6A983C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
                  </svg>
                </HeaderInputLabelSvg>
              </Flex>

              <HeaderInputClean />

              <Flex>
                <div>
                  <Input style={{ width: 262, userSelect: "none" }} type="text" placeholder="Search Products, categories ..." />
                </div>
                <FlexAlign>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M9.19401 11.4333C11.7713 11.4333 13.8607 9.34394 13.8607 6.76661C13.8607 4.18928 11.7713 2.09995 9.19401 2.09995C6.61668 2.09995 4.52734 4.18928 4.52734 6.76661C4.52734 9.34394 6.61668 11.4333 9.19401 11.4333Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel" />
                    <path d="M5.81417 10.24L2.6875 13.3667" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel" />
                  </svg>
                </FlexAlign>
              </Flex>

            </HeaderInput>

            <Flex as={FlexJustifyContent} justifyContent="space-between" style={{ width: 88 }}>

              <div style={{ cursor: "pointer" }}>
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
                  <path d="M2 21.9999L2.79 19.1199C5.4 9.6199 16.6 9.6199 19.21 19.1199L20 21.9999" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 11.98C13.7614 11.98 16 9.74141 16 6.97998C16 4.21856 13.7614 1.97998 11 1.97998C8.23858 1.97998 6 4.21856 6 6.97998C6 9.74141 8.23858 11.98 11 11.98Z" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
                </svg>

              </div>

              <div style={{ cursor: "pointer" }}>
                <div>
                  <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                    <path d="M17.8896 19.8499H6.10955C5.79187 19.8501 5.48326 19.7439 5.23309 19.5481C4.98291 19.3523 4.80562 19.0783 4.72955 18.7699L2.07955 8.15986C2.05369 8.05657 2.05174 7.94874 2.07383 7.84458C2.09593 7.74042 2.1415 7.64267 2.20707 7.55878C2.27264 7.47489 2.35649 7.40706 2.45223 7.36046C2.54797 7.31386 2.65307 7.28971 2.75955 7.28986H21.2396C21.346 7.28971 21.4511 7.31386 21.5469 7.36046C21.6426 7.40706 21.7265 7.47489 21.792 7.55878C21.8576 7.64267 21.9032 7.74042 21.9253 7.84458C21.9474 7.94874 21.9454 8.05657 21.9196 8.15986L19.2696 18.7699C19.1935 19.0783 19.0162 19.3523 18.766 19.5481C18.5158 19.7439 18.2072 19.8501 17.8896 19.8499V19.8499Z" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.80039 2.14993L6.90039 7.28993" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8789 2.14993L16.7889 7.28993" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ position: 'absolute', width: 18, height: 18, background: "#E5704B", color: "#fff", fontWeight: 600, fontSize: 12, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)", borderRadius: 12, margin: "-15px 0 0 -5px" }}>
                  <div style={{ margin: "0 4.6px", cursor: "pointer", userSelect: "none" }}>4</div>
                </div>
              </div>

            </Flex>

          </FlexAlign>
        </Header>

        <Nav as={FlexAlign} style={{ display: menuMobile || "flex" }}>
          <div style={{ background: "#F9F9F9", position: "absolute", width: '100%', height: 55, left: 0, zIndex: 1 }}></div>
          <NavContainer as={Flex} style={{ zIndex: 2 }}>
            <NavUl style={{ padding: 0, width: "100%" }}>
              <FlexJustifyContent justifyContent="space-between" style={{ width: "100%" }}>
                <MenuMobileLabel>
                  <div style={{ display: "flex", padding: 8, border: "1px solid", borderRadius: 8 }}>
                    <div style={{ margin: "3px 12px 0 3px" }}>
                      <FlexAlign>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M9.19401 11.4333C11.7713 11.4333 13.8607 9.34394 13.8607 6.76661C13.8607 4.18928 11.7713 2.09995 9.19401 2.09995C6.61668 2.09995 4.52734 4.18928 4.52734 6.76661C4.52734 9.34394 6.61668 11.4333 9.19401 11.4333Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel" />
                          <path d="M5.81417 10.24L2.6875 13.3667" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel" />
                        </svg>
                      </FlexAlign>
                    </div>
                    <div style={{ width: "100%" }}>
                      <Input style={{ width: "97%" }} type="text" placeholder="Search Products, categories ..." />
                    </div>
                  </div>
                </MenuMobileLabel>
                <MenuMobileLabel><span>Menu</span></MenuMobileLabel>
                {
                  dataMenu.map(({ id, label, options }) => (
                    <Flex as={NavLi} key={Math.floor(Math.random() * 10010) - 100}>
                      <div>
                        <span>{label}</span>
                      </div>
                      <div style={{ marginLeft: 4 }}>
                        <span>
                          <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
                            <path d="M3.60938 5.40001L5.66437 7.45501C5.75806 7.54814 5.88478 7.60041 6.01687 7.60041C6.14897 7.60041 6.27569 7.54814 6.36937 7.45501L8.36937 5.45501" stroke="#6A983C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel" />
                          </svg>
                        </span>
                      </div>
                    </Flex>
                  ))
                }
              </FlexJustifyContent>
            </NavUl>
          </NavContainer>
        </Nav>

        <Navigations as={FlexAlign} style={{ fontFamily: 'Open Sans', fontSize: 12, height: 48 }}>
          <span style={{ color: "#A9A9A9" }}>HomePage</span>
          <span style={{ color: "#A9A9A9", margin: "0 8px" }}>/</span>
          <span style={{ color: "#151515", cursor: "pointer" }}>Frutas e vegetais</span>
        </Navigations>

        <Heading>
          <FlexAlign style={{ height: "inherit" }} as={FlexJustifyContent} justifyContent="space-between">
            <div>
              <h1>Frutas e vegetais</h1>
            </div>
            <Flex as={HeadingAside} style={{ userSelect: "none" }} >
              <Flex style={{ cursor: "pointer" }}>
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.333 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V13.3333C1.33301 14.0697 1.92996 14.6666 2.66634 14.6666H13.333C14.0694 14.6666 14.6663 14.0697 14.6663 13.3333V2.66665C14.6663 1.93027 14.0694 1.33331 13.333 1.33331Z" stroke="#6A983C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.33301 8H14.6663" stroke="#6A983C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 1.33331V14.6666" stroke="#6A983C" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ lineHeight: "1.1", margin: "0 0 0 4px" }}>
                  <HeadingSpan style={{ color: "#151515", fontWeight: "500" }}>Grid view</HeadingSpan>
                </div>
              </Flex>
              <Flex style={{ margin: "0 24px", cursor: "pointer" }}>
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.333 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V13.3333C1.33301 14.0697 1.92996 14.6666 2.66634 14.6666H13.333C14.0694 14.6666 14.6663 14.0697 14.6663 13.3333V2.66665C14.6663 1.93027 14.0694 1.33331 13.333 1.33331Z" stroke="#A9A9A9" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.33301 4.66663H14.6663" stroke="#A9A9A9" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.33301 8H14.6663" stroke="#A9A9A9" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.33301 11.3333H14.6663" stroke="#A9A9A9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ lineHeight: "1.1", margin: "0 0 0 4px" }}>
                  <HeadingSpan>List view</HeadingSpan>
                </div>
              </Flex>
              <Flex style={{ cursor: "pointer" }}>
                <div style={{ background: "#F4F8EC", borderRadius: 12, padding: "0px 8px", lineHeight: "1.1" }}>
                  <span style={{ fontWeight: 600, fontSize: 12, color: "#6A983C" }}>117</span>
                </div>
                <div style={{ lineHeight: "1.1", margin: "0 0 0 4px" }}>
                  <HeadingSpan>Produtos</HeadingSpan>
                </div>
              </Flex>
            </Flex>
          </FlexAlign>
        </Heading>

        <Filter>

        </Filter>

        <Main as={Flex}>
          <Aside>
            <div>
              <div style={{ fontSize: 18, fontWeight: 600, margin: "0 0 16px 0" }}>
                <span>Categorias</span>
              </div>

              <div>
                <FlexAlign as={FlexJustifyContent} justifyContent="space-between">
                  <div>
                    <span>Frutas</span>
                  </div>
                  <div style={{ height: 18, background: "#F4F8EC", borderRadius: 12, padding: "0px 8px", lineHeight: "1.1" }}>
                    <span style={{ fontWeight: 600, fontSize: 12, color: "#6A983C" }}>320</span>
                  </div>
                </FlexAlign>

                <FlexAlign as={FlexJustifyContent} justifyContent="space-between" style={{ margin: '12px 0' }}>
                  <div>
                    <span>Legumes</span>
                  </div>
                  <div style={{ height: 18, background: "#F4F8EC", borderRadius: 12, padding: "0px 8px", lineHeight: "1.1" }}>
                    <span style={{ fontWeight: 600, fontSize: 12, color: "#6A983C" }}>112</span>
                  </div>
                </FlexAlign>

                <FlexAlign as={FlexJustifyContent} justifyContent="space-between">
                  <div>
                    <span>Orgânicos</span>
                  </div>
                  <div style={{ height: 18, background: "#F4F8EC", borderRadius: 12, padding: "0px 8px", lineHeight: "1.1" }}>
                    <span style={{ fontWeight: 600, fontSize: 12, color: "#6A983C" }}>32</span>
                  </div>
                </FlexAlign>

                <FlexAlign as={FlexJustifyContent} justifyContent="space-between" style={{ margin: '12px 0' }}>
                  <div>
                    <span>Saladas</span>
                  </div>
                  <div style={{ height: 18, background: "#F4F8EC", borderRadius: 12, padding: "0px 8px", lineHeight: "1.1" }}>
                    <span style={{ fontWeight: 600, fontSize: 12, color: "#6A983C" }}>48</span>
                  </div>
                </FlexAlign>

                <FlexAlign as={FlexJustifyContent} justifyContent="space-between">
                  <div>
                    <span>Verduras</span>
                  </div>
                  <div style={{ height: 18, background: "#F4F8EC", borderRadius: 12, padding: "0px 8px", lineHeight: "1.1" }}>
                    <span style={{ fontWeight: 600, fontSize: 12, color: "#6A983C" }}>117</span>
                  </div>
                </FlexAlign>
              </div>

            </div>

            <div style={{ margin: "48px 0" }}>

              <div style={{ fontSize: 18, fontWeight: 600, margin: "0 0 16px 0" }}>
                <span>Marcas</span>
              </div>

              <div>

                <div style={{ cursor: "pointer" }}>
                  <Flex as="label" style={{ cursor: "pointer", fontSize: 14 }}>
                    <Checkbox
                      checked={checked}
                      onChange={_ => setChecked(e => !e)}
                    />
                    <span style={{ margin: "0 8px" }}>
                      Direto da Serra
                    </span>
                  </Flex>
                </div>

                <div style={{ cursor: "pointer", margin: "12px 0" }}>
                  <Flex as="label" style={{ cursor: "pointer", fontSize: 14 }}>
                    <Checkbox
                      checked={checked2}
                      onChange={_ => setChecked2(e => !e)}
                    />
                    <span style={{ margin: "0 8px" }}>
                      Alibec
                    </span>
                  </Flex>
                </div>

                <div style={{ cursor: "pointer" }}>
                  <Flex as="label" style={{ cursor: "pointer", fontSize: 14 }}>
                    <Checkbox
                      checked={checked3}
                      onChange={_ => setChecked3(e => !e)}
                    />
                    <span style={{ margin: "0 8px" }}>
                      Golden Prime
                    </span>
                  </Flex>
                </div>

                <div style={{ cursor: "pointer", margin: "12px 0" }}>
                  <Flex as="label" style={{ cursor: "pointer", fontSize: 14 }}>
                    <Checkbox
                      checked={checked4}
                      onChange={_ => setChecked4(e => !e)}
                    />
                    <span style={{ margin: "0 8px" }}>
                      Agronippo
                    </span>
                  </Flex>
                </div>

                <div style={{ cursor: "pointer" }}>
                  <Flex as="label" style={{ cursor: "pointer", fontSize: 14 }}>
                    <Checkbox
                      checked={checked5}
                      onChange={_ => setChecked5(e => !e)}
                    />
                    <span style={{ margin: "0 8px" }}>
                      Golden
                    </span>
                  </Flex>
                </div>

              </div>

            </div>

            <div>

              <div style={{ fontSize: 18, fontWeight: 600, margin: "0 0 16px 0" }}>
                <span>Avaliação</span>
              </div>

              <div>

                <div style={{ cursor: "pointer", margin: "12px 0" }} >
                  <Flex as="label" style={{ cursor: "pointer", fontSize: 14 }}>
                    <Checkbox
                      checked={checkedStar}
                      onChange={_ => setCheckedStar(e => !e)}
                    />

                    <div style={{ margin: "0 8px" }}>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" style={{ margin: "0 2px" }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" style={{ margin: "0 2px" }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                    </div>
                  </Flex>
                </div>

                <div style={{ cursor: "pointer", margin: "12px 0" }} >
                  <Flex as="label" style={{ cursor: "pointer", fontSize: 14 }}>
                    <Checkbox
                      checked={checkedStar2}
                      onChange={_ => setCheckedStar2(e => !e)}
                    />

                    <div style={{ margin: "0 8px" }}>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" style={{ margin: "0 2px" }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" style={{ margin: "0 2px" }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671982 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671982 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" stroke="#D1D1D1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>


                  </Flex>
                </div>

                <div style={{ cursor: "pointer", margin: "12px 0" }} >
                  <Flex as="label" style={{ cursor: "pointer", fontSize: 14 }}>
                    <Checkbox
                      checked={checkedStar3}
                      onChange={_ => setCheckedStar3(e => !e)}
                    />
                    <div style={{ margin: "0 8px" }}>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" style={{ margin: "0 2px" }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" style={{ margin: "0 2px" }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671982 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671982 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" stroke="#D1D1D1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671982 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671982 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" stroke="#D1D1D1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>


                  </Flex>
                </div>

                <div style={{ cursor: "pointer", margin: "12px 0" }} >
                  <Flex as="label" style={{ cursor: "pointer", fontSize: 14 }}>
                    <Checkbox
                      checked={checkedStar4}
                      onChange={_ => setCheckedStar4(e => !e)}
                    />
                    <div style={{ margin: "0 8px" }}>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" style={{ margin: "0 2px" }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671982 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671982 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" stroke="#D1D1D1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" style={{ margin: "0 2px" }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671982 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671982 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" stroke="#D1D1D1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671982 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671982 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" stroke="#D1D1D1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                  </Flex>
                </div>

                <div style={{ cursor: "pointer", margin: "12px 0" }} >
                  <Flex as="label" style={{ cursor: "pointer", fontSize: 14 }}>
                    <Checkbox
                      checked={checkedStar5}
                      onChange={_ => setCheckedStar5(e => !e)}
                    />
                    <div style={{ margin: "0 8px" }}>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671983 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671983 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" fill="#FDBC15" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" style={{ margin: "0 2px" }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671982 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671982 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" stroke="#D1D1D1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671982 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671982 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" stroke="#D1D1D1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" style={{ margin: "0 2px" }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671982 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671982 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" stroke="#D1D1D1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.94835 1.12663C6.9944 0.980602 7.08581 0.853056 7.20929 0.762519C7.33277 0.671982 7.4819 0.623169 7.63502 0.623169C7.78814 0.623169 7.93727 0.671982 8.06075 0.762519C8.18423 0.853056 8.27564 0.980602 8.32169 1.12663L9.56169 4.93996H13.5617C13.7203 4.93397 13.8765 4.98006 14.0064 5.07119C14.1363 5.16232 14.2329 5.29348 14.2812 5.44464C14.3296 5.5958 14.3272 5.75863 14.2743 5.90827C14.2214 6.0579 14.121 6.18611 13.9884 6.2733L10.7417 8.62663L11.9817 12.4466C12.0307 12.5921 12.032 12.7495 11.9852 12.8958C11.9385 13.042 11.8462 13.1695 11.7218 13.2596C11.5975 13.3497 11.4476 13.3977 11.2941 13.3966C11.1405 13.3954 10.9913 13.3452 10.8684 13.2533L7.61502 10.8733L4.36835 13.2333C4.24536 13.3252 4.0962 13.3754 3.94265 13.3766C3.7891 13.3777 3.63921 13.3297 3.51487 13.2396C3.39052 13.1495 3.29824 13.022 3.25149 12.8758C3.20474 12.7295 3.20598 12.5721 3.25502 12.4266L4.49502 8.60663L1.24835 6.2533C1.11574 6.16611 1.01532 6.0379 0.962434 5.88827C0.909546 5.73863 0.9071 5.5758 0.95547 5.42464C1.00384 5.27348 1.10037 5.14232 1.2303 5.05119C1.36023 4.96006 1.51643 4.91397 1.67502 4.91996H5.67502L6.94835 1.12663Z" stroke="#D1D1D1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                  </Flex>
                </div>

              </div>

            </div>

            <div style={{ margin: "48px 0 31px" }}>
              <div style={{ fontSize: 18, fontWeight: 600, margin: "0 0 16px 0" }}>
                <span>Preço</span>
              </div>
              <div>
                <MultiRangeSlider
                  min={0}
                  max={1000}
                  onChange={({ min, max }) => { }}
                />
              </div>
            </div>

            <Flex>

              <Button width="78px">
                <span>Apply</span>
              </Button>

              <AsideButtonReset style={{ marginLeft: "34px" }}>
                <span>Reset</span>
              </AsideButtonReset>

            </Flex>

          </Aside>
          <MainContainer style={{ margin: "0 16px" }}>
            <FlexJustifyContent justifyContent="space-evenly" style={{ flexWrap: "wrap" }}>
              {
                dataPostagens.map(({ id, label, price, beforePrice, img, star }) => (

                  <div key={Math.floor(Math.random() * 10010) - 100} style={{ border: "1px solid #D1D1D1", borderRadius: 12, padding: 16, padding: 14, margin: "0px 0 24px 0" }}>
                    <MainImage style={{ userSelect: "none" }} >
                      <Image src={img} alt="" placeholder='blur' blurDataURL={img} layout="responsive" width="230" height="180" />
                    </MainImage>

                    <Description>

                      <div style={{ margin: "0 0 25px" }}>

                        <div style={{ fontSize: 18 }}>
                          <h3>{label}</h3>
                        </div>
                        <div style={{ fontSize: 12, margin: "4px 0 8px" }}>
                          <span>Space for a small product description</span>
                        </div>

                        <Flex>

                          {

                            star.map(({ state }) => (
                              <div key={Math.floor(Math.random() * 10010) - 100}>
                                {
                                  state ? (<div style={{ margin: "0 2px 0 0" }}>
                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M8.42397 0.658288C8.48153 0.475753 8.59578 0.316321 8.75014 0.203149C8.90449 0.0899781 9.0909 0.0289612 9.2823 0.0289612C9.4737 0.0289612 9.66011 0.0899781 9.81446 0.203149C9.96882 0.316321 10.0831 0.475753 10.1406 0.658288L11.6906 5.42495H16.6906C16.8889 5.41746 17.0841 5.47507 17.2465 5.58899C17.409 5.7029 17.5296 5.86686 17.5901 6.0558C17.6505 6.24474 17.6475 6.44829 17.5814 6.63533C17.5153 6.82238 17.3897 6.98263 17.224 7.09162L13.1656 10.0333L14.7156 14.8083C14.7769 14.9902 14.7785 15.1869 14.72 15.3697C14.6616 15.5526 14.5463 15.7119 14.3908 15.8245C14.2354 15.9371 14.048 15.9971 13.8561 15.9957C13.6642 15.9943 13.4777 15.9315 13.324 15.8166L9.2573 12.8416L5.19897 15.7916C5.04522 15.9065 4.85877 15.9693 4.66684 15.9707C4.4749 15.9721 4.28754 15.9121 4.13211 15.7995C3.97668 15.6869 3.86133 15.5276 3.80289 15.3447C3.74445 15.1619 3.746 14.9652 3.8073 14.7833L5.3573 10.0083L1.29897 7.06662C1.1332 6.95763 1.00768 6.79738 0.941567 6.61033C0.875458 6.42329 0.872401 6.21975 0.932863 6.0308C0.993325 5.84186 1.11398 5.6779 1.2764 5.56398C1.43881 5.45007 1.63406 5.39246 1.8323 5.39995H6.8323L8.42397 0.658288Z" fill="#151515" />
                                    </svg>
                                  </div>)
                                  : (<div style={{ margin: "0 2px 0 0" }}>
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M8.42397 1.65829C8.48153 1.47575 8.59578 1.31632 8.75014 1.20315C8.90449 1.08998 9.0909 1.02896 9.2823 1.02896C9.4737 1.02896 9.66011 1.08998 9.81446 1.20315C9.96882 1.31632 10.0831 1.47575 10.1406 1.65829L11.6906 6.42495H16.6906C16.8889 6.41746 17.0841 6.47507 17.2465 6.58899C17.409 6.7029 17.5296 6.86686 17.5901 7.0558C17.6505 7.24474 17.6475 7.44829 17.5814 7.63533C17.5153 7.82238 17.3897 7.98263 17.224 8.09162L13.1656 11.0333L14.7156 15.8083C14.7769 15.9902 14.7785 16.1869 14.72 16.3697C14.6616 16.5526 14.5463 16.7119 14.3908 16.8245C14.2354 16.9371 14.048 16.9971 13.8561 16.9957C13.6642 16.9943 13.4777 16.9315 13.324 16.8166L9.2573 13.8416L5.19897 16.7916C5.04522 16.9065 4.85877 16.9693 4.66684 16.9707C4.4749 16.9721 4.28754 16.9121 4.13211 16.7995C3.97668 16.6869 3.86133 16.5276 3.80289 16.3447C3.74445 16.1619 3.746 15.9652 3.8073 15.7833L5.3573 11.0083L1.29897 8.06662C1.1332 7.95763 1.00768 7.79738 0.941567 7.61033C0.875458 7.42329 0.872401 7.21975 0.932863 7.0308C0.993325 6.84186 1.11398 6.6779 1.2764 6.56399C1.43881 6.45007 1.63406 6.39246 1.8323 6.39995H6.8323L8.42397 1.65829Z" stroke="#EBEBEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </div>)
                                }

                              </div>

                            ))

                          }

                        </Flex>

                      </div>

                    </Description>

                    <OptionsButton as={FlexJustifyContent} justifyContent="space-between">
                      <div>
                        <div>
                          <div style={{ fontSize: 18, fontWeight: 600 }}>
                            <h4>R$ {price}</h4>
                          </div>
                          <div style={{ fontSize: 12, fontWeight: 600, color: "#A9A9A9", textDecoration: "line-through" }}>
                            <span>{beforePrice}</span>
                          </div>
                        </div>

                        {/* <div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: "#A9A9A9" }}>
                          <span>Envio Grátis</span>
                          </div>
                          <div style={{ fontSize: 12, color: "#A9A9A9" }}>
                          <span>Entrega em 1 dia</span>
                        </div>
                      </div> */}
                      </div>

                      <div>
                        {/* <div style={{ margin: "0 0 12px" }}>
                        <Button width="164px">
                        <div>
                            <span>Ver Mais</span>
                            </div>
                            <Flex style={{ marginLeft: 8 }}>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M6.79004 11.6866L9.53004 8.94662C9.65421 8.82171 9.7239 8.65274 9.7239 8.47662C9.7239 8.30049 9.65421 8.13153 9.53004 8.00662L6.86337 5.33995" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
                            </svg>
                            </Flex>
                            </Button>
                          </div> */}
                        <div>
                          <FlexJustifyContent as={FlexAlign} style={{ height: 36, width: 135, background: "#6A983C", borderRadius: 12, userSelect: "none", cursor: "pointer", color: "#FFFFFF", border: "2px solid #46760A" }}>

                            <Flex style={{ marginRight: 8 }}>
                              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2H4.37403L6.51744 11.2994H15.1047L16 4.67926H5.5814" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.05727 12.751H8.05048C7.56349 12.751 7.1687 13.1458 7.1687 13.6328V13.6395C7.1687 14.1265 7.56349 14.5213 8.05048 14.5213H8.05727C8.54426 14.5213 8.93905 14.1265 8.93905 13.6395V13.6328C8.93905 13.1458 8.54426 12.751 8.05727 12.751Z" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.05727 12.751H8.05048C7.56349 12.751 7.1687 13.1458 7.1687 13.6328V13.6395C7.1687 14.1265 7.56349 14.5213 8.05048 14.5213H8.05727C8.54426 14.5213 8.93905 14.1265 8.93905 13.6395V13.6328C8.93905 13.1458 8.54426 12.751 8.05727 12.751Z" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.7103 12.751H12.7036C12.2166 12.751 11.8218 13.1458 11.8218 13.6328V13.6395C11.8218 14.1265 12.2166 14.5213 12.7036 14.5213H12.7103C13.1973 14.5213 13.5921 14.1265 13.5921 13.6395V13.6328C13.5921 13.1458 13.1973 12.751 12.7103 12.751Z" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </Flex>

                            <div style={{ fontSize: 15, fontWeight: 700 }}>
                              <span>Adicionar</span>
                            </div>

                          </FlexJustifyContent>
                        </div>
                      </div>

                    </OptionsButton>


                  </div>
                ))
              }
            </FlexJustifyContent>
          </MainContainer>

        </Main>

        <NavigationsPages>
          <FlexJustifyContent as={FlexAlign} justifyContent="space-between">
            <Flex>
              <div>
                <div style={{ fontSize: 12, fontWeight: 400, color: "#A9A9A9" }}>
                  <span>Páginas:</span>
                </div>
              </div>
              <div>
                <NavUl as={Flex}>
                  {
                    [1, 2, 3, 4].map(_ => <Flex key={Math.floor(Math.random() * 10010) - 100}><li style={{ padding: 0, margin: 0, fontSize: 12, color: "#151515", marginLeft: 8, cursor: 'pointer' }}>{_}</li></Flex>)
                  }
                </NavUl>
              </div>
            </Flex>

            <div>
              <Button width="214px" style={{ padding: "0 8px" }}>
                <div>
                  <span>Mostrar mais produtos</span>
                </div>
                <Flex style={{ marginLeft: 8 }}>
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.31348 2.03333L4.05348 4.77332C4.17838 4.89749 4.34735 4.96719 4.52348 4.96719C4.6996 4.96719 4.86857 4.89749 4.99348 4.77332L7.66014 2.10666" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
                  </svg>

                </Flex>
              </Button>
            </div>
            <div>
              <Flex style={{ cursor: "pointer", userSelect: "none" }}>
                <div style={{ background: "#F4F8EC", borderRadius: 12, padding: "0px 8px", lineHeight: "1.1" }}>
                  <span style={{ fontWeight: 600, fontSize: 12, color: "#6A983C" }}>336</span>
                </div>
                <div style={{ lineHeight: "1.1", margin: "0 0 0 4px" }}>
                  <HeadingSpan>Produtos</HeadingSpan>
                </div>
              </Flex>
            </div>
          </FlexJustifyContent>
        </NavigationsPages>

        <Footer as={Navigations} style={{ marginTop: 65 }}>
          <Flex as={FlexJustifyContent} justifyContent="space-between">
            <div>
              <div style={{ fontSize: 18, fontWeight: 600, margin: "0 0 16px 0" }}>
                <span>Get in touch</span>
              </div>
              <div>
                <NavUl>
                  {
                    ["About Us", "Careers", "Press Releases", "Blog"].map(_ => (
                      <div key={Math.floor(Math.random() * 10010) - 100} style={{ width: 150, margin: "8px 0", fontSize: 14, color: "#6A983C", cursor: "pointer" }}>
                        <li>
                          <span>{_}</span>
                        </li>
                      </div>
                    ))
                  }
                </NavUl>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 600, margin: "0 0 16px 0" }}>
                <span>Connections</span>
              </div>
              <div>
                <NavUl>
                  {
                    ["Facebook", "Twitter", "Instagram", "Youtube", "Linkedin"].map(_ => (
                      <div key={Math.floor(Math.random() * 10010) - 100} style={{ width: 150, margin: "8px 0", fontSize: 14, color: "#6A983C", cursor: "pointer" }}>
                        <li>
                          <span>{_}</span>
                        </li>
                      </div>
                    ))
                  }
                </NavUl>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 600, margin: "0 0 16px 0" }}>
                <span>Earnings</span>
              </div>
              <div>
                <NavUl>
                  {
                    ["Become an Affiliate", "Advertise your product", "Sell on Market"].map(_ => (
                      <div key={Math.floor(Math.random() * 10010) - 100} style={{ width: 150, margin: "8px 0", fontSize: 14, color: "#6A983C", cursor: "pointer" }}>
                        <li>
                          <span>{_}</span>
                        </li>
                      </div>
                    ))
                  }
                </NavUl>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 600, margin: "0 0 16px 0" }}>
                <span>Account</span>
              </div>
              <div>
                <NavUl>
                  {
                    ["Your account", "Returns Centre", "100 % purchase protection", "Chat with us", "Help"].map(_ => (
                      <div key={Math.floor(Math.random() * 10010) - 100} style={{ width: 150, margin: "8px 0", fontSize: 14, color: "#6A983C", cursor: "pointer" }}>
                        <li>
                          <span>{_}</span>
                        </li>
                      </div>
                    ))
                  }
                </NavUl>
              </div>
            </div>
          </Flex>
        </Footer>

        <Tags as={Navigations}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 600, margin: "0 0 16px 0" }}>
              <span>Product tags</span>
            </div>
            <Flex style={{ flexWrap: "wrap" }} >
              {
                [
                  "Beans", "Carrots", "Apples", "Garlic", "Mushrooms", "Tomatoes",
                  "Chilli peppers", "Broccoli", "Watermelons", "Oranges", "Bananas",
                  "Grapes", "Cherries", "Meat", "Seo tag", "Fish", "Fresh food", "Lemons"
                ].map(_ => (
                  <div key={Math.floor(Math.random() * 10010) - 100} style={{ width: "auto", height: 26, borderRadius: 18, color: "#151515", background: "#F5F5F5", padding: "4px 16px", margin: "0px 8px 16px 0", fontWeight: 600, fontSize: 12 }}>
                    <span>{_}</span>
                  </div>
                ))
              }
            </Flex>
          </div>
        </Tags>

        <Copyright as={Navigations}>
          <div style={{ fontSize: 14, margin: "48px 0" }}>
            <span>Copyright © 2020 petrbilek.com</span>
          </div>
        </Copyright>

      </Container>

    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      
    },
  }
}