

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from '../img/logga.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Hanterar mobilmenyn
    const [dropdownOpen, setDropdownOpen] = useState(null); // Hanterar dropdown för desktop
    const [subDropdownOpen, setSubDropdownOpen] = useState(null); // Hanterar sub-dropdown för desktop
    const [subMenu, setSubMenu] = useState(null); // Hanterar vilken submenu som visas
    const [previousMenu, setPreviousMenu] = useState(null); // Håller reda på föregående meny

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setSubMenu(null); // Stäng submenyn när huvudmenyn stängs
    };

    const openSubMenu = (menu) => {
        setSubMenu(menu);
        setPreviousMenu(subMenu); // Spara den föregående menyn
    };

    const closeSubMenu = () => {
      if (previousMenu) {
        setSubMenu(previousMenu); // Gå tillbaka till föregående meny
        setPreviousMenu(null);    // Rensa föregående meny efter användning
      } else {
        setSubMenu(null);         // Stäng menyn helt
      }
    };

    const handleDropdown = (menu) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
        setSubDropdownOpen(null); // Reset sub-dropdown
    };
    const handleSubDropdown = (submenu) => {
      setSubDropdownOpen(subDropdownOpen === submenu ? null : submenu);
  };

  return (
    <header className="header-container">
      <div className="navbar-top">
        <div className="logo">
        <Link to="/">
          <img src={logo} alt="House of Aesthetics Logo" className="logo-image" />
        </Link>
        </div>
        <div className="contact-info">
          <span>tel: 040 - 51 11 01</span>
          <Link to="/Bokatid">
  <button className="book-btn">Boka tid</button>
</Link>
        </div>
        {/* Hamburgermeny för mobila enheter */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <span className="close-icon">&times;</span> // Close (×) ikon
          ) : (
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
      </div>
      {/* Desktop Navigation */}
{/* Desktop Navigation */}
<nav className={`navbar-bottom ${menuOpen ? "active" : ""}`}>
  <ul className="nav-links">
    <li
      onMouseEnter={() => handleDropdown("behandlingsutbud")}
      onMouseLeave={() => handleDropdown(null)}
      className="dropdown-container"
    >
      <Link to="/Behandlingsutbud">BEHANDLINGSUTBUD <FontAwesomeIcon icon={faChevronDown} /></Link>
      {dropdownOpen === "behandlingsutbud" && (
        <div className="full-width-dropdown">
          <ul className="dropdown-grid">
            <li>
  <Link to="/Injektionsbehandlingar">ESTETISKA INJEKTIONSBEHANDLINGAR</Link>
  <ul>
    <li><Link to="/Rynkreducerande">Rynkreducerande injektionsbehandlingar</Link></li>
    <li><Link to="/Fillers">Filler</Link></li>
    <li><Link to="/Skinboosters">Skinbooster</Link></li>
    <li><Link to="/Profhilo">Prohilo</Link></li>
    <li><Link to="/PRP">PRP-PRF</Link></li>
    <li><Link to="/Carboxy">Carboxy-Cellutrix</Link></li>
    <li><Link to="/Vitamindropp">Vitamindropp</Link></li>
  </ul>
</li>
            <li>
              <Link to="/Trådlyft">TRÅDLYFT</Link>
              <ul>
                <li>
                  <Link to="/Tradlyft-Midface">Trådlyft | Midface</Link>
                </li>
                <li>
                  <Link to="/Tradlyft-Kaklinjen">Trådlyft | Käklinjen</Link>
                </li>
                <li>
                  <Link to="/Tradlyft-Kindben">Trådlyft | Kindben</Link>
                </li>
                <li>
                  <Link to="/Tradlyft-Halslyft">Trådlyft | Halslyft</Link>
                </li>
                <li>
                  <Link to="/Tradlyft-Dubbelhaka">Trådlyft | Dubbelhaka</Link>
                </li>
                <li>
                  <Link to="/Mono-Kinder">Mono | Kinder</Link>
                </li>
                <li>
                  <Link to="/Mono-Marionettlinjer">Mono | Marionettlinjer</Link>
                </li>
                <li>
                  <Link to="/Mono-Nasolabiala">Mono | Nasolabiala</Link>
                </li>
                <li>
                  <Link to="/Mono-Ogon">Mono | Ögon</Link>
                </li>
                <li>
                  <Link to="/Mono-Suramungipor">Mono | Suramungipor</Link>
                </li>
              </ul>
            </li>
            <li>
  <Link to="/Laserbehandlingar">LASERBEHANDLINGAR</Link>
  <ul>
    <li><Link to="/NordlysIpl">Nordlys | IPL</Link></li>
    <li><Link to="/Nordlys-Frax1550">Nordlys | Frax 1550</Link></li>
    <li><Link to="/Nordlys-LightBright">Nordlys | Light & Bright</Link></li>
  </ul>
</li>

            <li>
              <Link to="/Ansiktsbehandlingar">ANSIKTSBEHANDLINGAR</Link>
              <ul>
              <li>
                  <Link to="/Dermaplaning">Dermaplaning</Link>
                </li>
                <li>
                  <Link to="/Djuprensande-ansiktsbehandling">Djuprensande Ansiktsbehandling</Link>
                </li>
                <li>
                  <Link to="/Instant-clean">Instant Clean</Link>
                </li>
                <li>
                  <Link to="/Instant-glow">Instant Glow</Link>
                </li>
                <li>
                  <Link to="/Kemisk-peel">Milk Peel</Link>
                </li>
                <li>
                  <Link to="/BioRepeel">BioRepeel</Link>
                </li>
                <li>
                  <Link to="/MaskPeel">Mask Peel</Link>
                </li>
                <li>
                  <Link to="/Klassisk-ansiktsbehandling">Klassisk Ansiktsbehandling</Link>
                </li>
                <li>
                  <Link to="/LED-Ljusterapi">LED Ljusterapi</Link>
                </li>
                <li>
                  <Link to="/Lyx-ansiktsbehandling">Lyx Ansiktsbehandling</Link>
                </li>
                <li>
                  <Link to="/Microneedling">Microneedling</Link>
                </li>
                <li>
                  <Link to="/PRXT-33">PRX T-33</Link>
                </li>


              </ul>
            </li>
            <li>
              <Link to="/HydraFacial">HYDRA FACIAL</Link>
              <ul>
              <li>
                  <Link to="/Deluxe-HydraFacial">Hydra Facial | Deluxe</Link>
                </li>
                <li>
                  <Link to="/HydraFacial-Gravida">Hydra Facial | För gravida</Link>
                </li>
                <li>
                  <Link to="/Platinum-HydraFacial">Hydra Facial | Platinum</Link>
                </li>
                <li>
                  <Link to="/Standard-HydraFacial">Hydra Facial | Standard</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Massagee">MASSAGE</Link>
              <ul>
              <li>
                  <Link to="/KlippkortX5">Klippkort x5</Link>
                </li>
                <li>
                  <Link to="/Ansiktsmassage">Ansiktsmassage</Link>
                </li>
                <li>
                  <Link to="/RelaxingTime">Relaxing Time</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Vaxning">VAXNING</Link>
              <ul>
              <li>
                  <Link to="/Armar">Armar</Link>
                </li>
                <li>
                  <Link to="/ArmarMen">Armar män</Link>
                </li>
                <li>
                  <Link to="/Armhala">Armhåla</Link>
                </li>
                <li>
                  <Link to="/Bikini">Bikini</Link>
                </li>
                <li>
                  <Link to="/Brasiliansk">Braziliansk</Link>
                </li>
                <li>
                  <Link to="/Brost+Mage">Bröst + mage</Link>
                </li>
                <li>
                  <Link to="/Halvaben">Halva ben</Link>
                </li>
                <li>
                  <Link to="/Halvaben+bikini">Halva ben + bikini</Link>
                </li>
                <li>
                  <Link to="/Helaben">Hela ben</Link>
                </li>
                <li>
                  <Link to="/Helaben+bikini">Hela ben + bikini</Link>
                </li>
                <li>
                  <Link to="/Helkropp">Helkropp vax</Link>
                </li>
                <li>
                  <Link to="/Overlapp">Överläpp</Link>
                </li>
                <li>
                  <Link to="/Overlapp+haka">Överläpp + haka</Link>
                </li>
                <li>
                  <Link to="/Rygg">Rygg</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </li>
    
    <li
      onMouseEnter={() => handleDropdown("priser")}
      onMouseLeave={() => handleDropdown(null)}
      className="dropdown-container"
    >
       <Link to="/Priser">PRISER <FontAwesomeIcon icon={faChevronDown} /></Link>
      {dropdownOpen === "priser" && (
        <div className="full-width-dropdown">
          <ul className="dropdown-grid">
            <li>
              <Link to="/injektionsbehandlingar-priser">ESTETISKA INJEKTIONSBEHANDLINGAR</Link>
            </li>
            <li>
              <Link to="/tradlyft-priser">TRÅDLYFT</Link>
            </li>
            <li>
              <Link to="/laserbehandlingar-priser">LASERBEHANDLINGAR</Link>
            </li>
            <li>
              <Link to="/ansiktsbehandlingar-priser">ANSIKTSBEHANDLINGAR</Link>
              
            </li>
            <li>
              <Link to="/hydra-facial-priser">HYDRA FACIAL</Link>
            </li>
            <li>
              <Link to="/massage-priser">MASSAGE</Link>
            </li>
            <li>
              <Link to="/vaxning-priser">VAXNING</Link>
            </li>
          </ul>
        </div>
      )}
    </li>

    <li>
      <Link to="/Omoss">OM OSS</Link>
    </li>
    <li>
      <Link to="/Utbildningar">UTBILDNINGAR</Link>
    </li>
    <li>
      <Link to="/Kontakt">KONTAKT</Link>
    </li>
    <li>
      <Link to="/HittaBehandling">HITTA RÄTT BEHANDLING</Link>
    </li>
  </ul>
</nav>



     {/* Mobil Navigation */}
<div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
  {/* Ny Header med "MENY" */}
  <div className="mobile-menu-header">
    <span className="menu-title">MENY</span>
    <span className="close-icon" onClick={toggleMenu}>&times;</span>
  </div>

  {/* Tillbaka-knappen */}
  {subMenu && (
    <div className="mobile-back">
      <span className="back-icon" onClick={closeSubMenu}><FontAwesomeIcon icon={faChevronLeft} /> Tillbaka</span>
    </div>
  )}

  {subMenu === null ? (
    <ul className="mobile-menu-links">
      <li>
        <div className="submenu-trigger">
          <Link to="/Behandlingsutbud" onClick={toggleMenu}>BEHANDLINGSUTBUD</Link>
          <span className="arrow" onClick={() => openSubMenu("behandlingsutbud")}> <FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
      </li>
      <li>
        <div className="submenu-trigger">
          <Link to="/Priser" onClick={toggleMenu}>PRISER</Link>
          <span className="arrow" onClick={() => openSubMenu("priser")}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
      </li>
      <li><Link to="/Omoss" onClick={toggleMenu}>OM OSS</Link></li>
      <li><Link to="/Utbildningar" onClick={toggleMenu}>UTBILDNINGAR</Link></li>
      <li><Link to="/Kontakt" onClick={toggleMenu}>KONTAKT</Link></li>
      <li><Link to="/HittaBehandling" onClick={toggleMenu}>HITTA RÄTT BEHANDLING</Link></li>
    </ul>

  ) : subMenu === "behandlingsutbud" ? (
    <ul className="mobile-submenu">

      <li>
  <div className="submenu-trigger">
    <Link to="/Injektionsbehandlingar" onClick={toggleMenu}>ESTETISKA INJEKTIONSBEHANDLINGAR</Link>
    <span className="arrow" onClick={() => openSubMenu("injektionsbehandlingar")}>
      <FontAwesomeIcon icon={faChevronRight} />
    </span>
  </div>
</li>

      
      <li>

        <div className="submenu-trigger">
          <Link to="/Trådlyft" onClick={toggleMenu}>TRÅDLYFT</Link>
          <span className="arrow" onClick={() => openSubMenu("trådlyft")}> 
            <FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
        </li>
<li>
      <div className="submenu-trigger">
  <Link to="/Laserbehandlingar" onClick={toggleMenu}>LASERBEHANDLINGAR</Link>
  <span className="arrow" onClick={() => openSubMenu("laser")}>
    <FontAwesomeIcon icon={faChevronRight} />
  </span>
</div>
</li>

        <li>
        <div className="submenu-trigger">
          <Link to="/Ansiktsbehandlingar" onClick={toggleMenu}>ANSIKTSBEHANDLINGAR</Link>
          <span className="arrow" onClick={() => openSubMenu("ansiktsbehandlingar")}> 
            <FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
      </li>

      <li>
        <div className="submenu-trigger">
          <Link to="/HydraFacial" onClick={toggleMenu}>HYDRA FACIAL</Link>
          <span className="arrow" onClick={() => openSubMenu("hydrafacial")}> <FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
      </li>
      <li>
        <div className="submenu-trigger">
          <Link to="/Massagee" onClick={toggleMenu}>MASSAGE</Link>
          <span className="arrow" onClick={() => openSubMenu("massage")}> <FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
      </li>
      <li>
        <div className="submenu-trigger">
          <Link to="/Vaxning" onClick={toggleMenu}>VAXNING</Link>
          <span className="arrow" onClick={() => openSubMenu("vaxning")}> <FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
      </li>
    </ul>
  ) : subMenu === "ansiktsbehandlingar" ? (
    <ul className="mobile-submenuu">
      <li><Link to="/Dermaplaning" onClick={toggleMenu}>Dermaplaning</Link></li>
      <li><Link to="/Djuprensande-ansiktsbehandling" onClick={toggleMenu}>Djuprensande Ansiktsbehandling</Link></li>
      <li><Link to="/Instant-clean" onClick={toggleMenu}>Instant Clean</Link></li>
      <li><Link to="/Instant-glow" onClick={toggleMenu}>Instant Glow</Link></li>
      <li><Link to="/Kemisk-peel" onClick={toggleMenu}>Milk Peel</Link></li>
      <li><Link to="/BioRepeel" onClick={toggleMenu}>BioRepeel</Link></li>
      <li><Link to="/MaskPeel" onClick={toggleMenu}>Mask Peel</Link></li>
      <li><Link to="/Klassisk-ansiktsbehandling" onClick={toggleMenu}>Klassisk Ansiktsbehandling</Link></li>
      <li><Link to="/LED-Ljusterapi" onClick={toggleMenu}>LED Ljusterapi</Link></li>
      <li><Link to="/Lyx-ansiktsbehandling" onClick={toggleMenu}>Lyx Ansiktsbehandling</Link></li>
      <li><Link to="/Microneedling" onClick={toggleMenu}>Microneedling</Link></li>
      <li><Link to="/PRXT-33" onClick={toggleMenu}>PRX T-33</Link></li>
    </ul>
  ) : subMenu === "hydrafacial" ? (
    <ul className="mobile-submenuu">
      <li><Link to="/Deluxe-HydraFacial" onClick={toggleMenu}>Hydra Facial | Deluxe</Link></li>
      <li><Link to="/HydraFacial-Gravida" onClick={toggleMenu}>Hydra Facial | För gravida</Link></li>
      <li><Link to="/Platinum-HydraFacial" onClick={toggleMenu}>Hydra Facial | Platinum</Link></li>
      <li><Link to="/Standard-HydraFacial" onClick={toggleMenu}>Hydra Facial | Standard</Link></li>
    </ul>
  ) : subMenu === "massage" ? (
    <ul className="mobile-submenuu">
      <li><Link to="/KlippkortX5" onClick={toggleMenu}>Klippkort x5</Link></li>
      <li><Link to="/Ansiktsmassage" onClick={toggleMenu}>Ansiktsmassage</Link></li>
      <li><Link to="/RelaxingTime" onClick={toggleMenu}>Relaxing Time</Link></li>
    </ul>
    ) : subMenu === "trådlyft" ? (
      <ul className="mobile-submenuu">
      <li><Link to="/Tradlyft-Midface" onClick={toggleMenu}>Trådlyft | Midface</Link></li>
      <li><Link to="/Tradlyft-Kaklinjen" onClick={toggleMenu}>Trådlyft | Käklinjen</Link></li>
      <li><Link to="/Tradlyft-Kindben" onClick={toggleMenu}>Trådlyft | Kindben</Link></li>
      <li><Link to="/Tradlyft-Halslyft" onClick={toggleMenu}>Trådlyft | Halslyft</Link></li>
      <li><Link to="/Tradlyft-Dubbelhaka" onClick={toggleMenu}>Trådlyft | Dubbelhaka</Link></li>


      <li><Link to="/Mono-Kinder" onClick={toggleMenu}>Mono | Kinder</Link></li>
      <li><Link to="/Mono-Marionettlinjer" onClick={toggleMenu}>Mono | Marionettlinjer</Link></li>
      <li><Link to="/Mono-Nasolabiala" onClick={toggleMenu}>Mono | Nasolabiala</Link></li>
      <li><Link to="/Mono-Ogon" onClick={toggleMenu}>Mono | Ögon</Link></li>
      <li><Link to="/Mono-Suramungipor" onClick={toggleMenu}>Mono | Suramungipor</Link></li>
    </ul>

  ) : subMenu === "vaxning" ? (
    <ul className="mobile-submenuu">
      <li><Link to="/Armar" onClick={toggleMenu}>Armar</Link></li>
      <li><Link to="/ArmarMen" onClick={toggleMenu}>Armar män</Link></li>
      <li><Link to="/Armhala" onClick={toggleMenu}>Armhåla</Link></li>
      <li><Link to="/Bikini" onClick={toggleMenu}>Bikini</Link></li>
      <li><Link to="/Brasiliansk" onClick={toggleMenu}>Brasiliansk</Link></li>
      <li><Link to="/Brost+Mage" onClick={toggleMenu}>Bröst + mage</Link></li>
      <li><Link to="/Halvaben" onClick={toggleMenu}>Halva ben</Link></li>
      <li><Link to="/Halvaben+bikini" onClick={toggleMenu}>Halva ben + bikini</Link></li>
      <li><Link to="/Helaben" onClick={toggleMenu}>Hela ben</Link></li>
      <li><Link to="/Helaben+bikini" onClick={toggleMenu}>Hela ben + bikini</Link></li>
      <li><Link to="/Helkropp" onClick={toggleMenu}>Helkropp vax</Link></li>
      <li><Link to="/Overlapp" onClick={toggleMenu}>Överläpp</Link></li>
      <li><Link to="/Overlapp+haka" onClick={toggleMenu}>Överläpp + haka</Link></li>
      <li><Link to="/Rygg" onClick={toggleMenu}>Rygg</Link></li>
    </ul>

) : subMenu === "injektionsbehandlingar" ? (
  <ul className="mobile-submenuu">
    <li className="submenu-item-with-arrow">
  <Link
    to="/Rynkreducerande"
    onClick={toggleMenu}
    className="mobile-link-with-arrow"
  >
    Rynkreducerande injektionsbehandlingar
  </Link>
  <span
    className="arrow"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      openSubMenu("rynkbehandlingar");
    }}
  >
    <FontAwesomeIcon icon={faChevronRight} />
  </span>
</li>


    <li className="submenu-item-with-arrow">
  <Link
    to="/Fillers"
    onClick={toggleMenu}
    className="mobile-link-with-arrow"
  >
    Fillers
  </Link>
  <span
    className="arrow"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      openSubMenu("fillers");
    }}
  >
    <FontAwesomeIcon icon={faChevronRight} />
  </span>
</li>



    <li className="submenu-item-with-arrow">
  <Link
    to="/Skinboosters"
    onClick={toggleMenu}
    className="mobile-link-with-arrow"
  >
    Skinbooster
  </Link>
  <span
    className="arrow"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      openSubMenu("skinboosters");
    }}
  >
    <FontAwesomeIcon icon={faChevronRight} />
  </span>
</li>

    
    <li className="submenu-item-with-arrow">
  <Link
    to="/PRP"
    onClick={toggleMenu}
    className="mobile-link-with-arrow"
  >
    PRP-PRF
  </Link>
  <span
    className="arrow"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      openSubMenu("prp");
    }}
  >
    <FontAwesomeIcon icon={faChevronRight} />
  </span>
</li>

   <li className="submenu-item-with-arrow">
  <Link
    to="/Carboxy"
    onClick={toggleMenu}
    className="mobile-link-with-arrow"
  >
    Carboxy-Cellutrix
  </Link>
  <span
    className="arrow"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      openSubMenu("carboxy");
    }}
  >
    <FontAwesomeIcon icon={faChevronRight} />
  </span>
</li>

    <li><Link to="/Vitamindropp" onClick={toggleMenu}>Vitamindropp</Link></li>
    <li><Link to="/Profhilo" onClick={toggleMenu}>Prohilo</Link></li>
  </ul>

  ) : subMenu === "rynkbehandlingar" ? (
    <ul className="mobile-submenuu">
      <li><Link to="/Rynkbehandling-Panna" onClick={toggleMenu}>Pannan</Link></li>
      <li><Link to="/Rynkbehandling-Glabella" onClick={toggleMenu}>Glabella (bekymmersrynkan)</Link></li>
      <li><Link to="/Rynkbehandling-Krakparkar" onClick={toggleMenu}>Kråksparkar</Link></li>
      <li><Link to="/Rynkbehandling-Mun" onClick={toggleMenu}>Rynkor runt munnen</Link></li>
      <li><Link to="/Rynkbehandling-Browlift" onClick={toggleMenu}>Browlift</Link></li>
      <li><Link to="/Rynkbehandling-Bunnylines" onClick={toggleMenu}>Bunnylines</Link></li>
      <li><Link to="/Rynkbehandling-Nastipp" onClick={toggleMenu}>Nästippen</Link></li>
      <li><Link to="/Rynkbehandling-Gummysmile" onClick={toggleMenu}>Gummysmile</Link></li>
      <li><Link to="/Rynkbehandling-Lipflip" onClick={toggleMenu}>Lipflip</Link></li>
      <li><Link to="/Rynkbehandling-Mungipor" onClick={toggleMenu}>Sura mungipor</Link></li>
      <li><Link to="/Rynkbehandling-Apelsinhaka" onClick={toggleMenu}>Apelsinhaka</Link></li>
      <li><Link to="/Rynkbehandling-Platysma" onClick={toggleMenu}>Platysma</Link></li>
      <li><Link to="/Rynkbehandling-Hyperhidros" onClick={toggleMenu}>Hyperhidros</Link></li>
      <li><Link to="/Rynkbehandling-Masseter" onClick={toggleMenu}>Käkmuskler (masseter)</Link></li>
      <li><Link to="/Rynkbehandling-Trapezius" onClick={toggleMenu}>Trapezius</Link></li>
    </ul>

) : subMenu === "fillers" ? (
  <ul className="mobile-submenuu">
    <li><Link to="/Fillers-Kindben" onClick={toggleMenu}>Fillers | Kindben</Link></li>
    <li><Link to="/Fillers-Midcheek" onClick={toggleMenu}>Fillers | Midcheek</Link></li>
    <li><Link to="/Fillers-Kaklinje" onClick={toggleMenu}>Fillers | Käklinje</Link></li>
    <li><Link to="/Fillers-Haka" onClick={toggleMenu}>Fillers | Haka</Link></li>
    <li><Link to="/Fillers-Nasolabial" onClick={toggleMenu}>Fillers | Nasolabialveck</Link></li>
    <li><Link to="/Fillers-Tinning" onClick={toggleMenu}>Fillers | Tinning</Link></li>
    <li><Link to="/Fillers-TearTrough" onClick={toggleMenu}>Fillers | Tear Trough</Link></li>
    <li><Link to="/Fillers-Marionettlinjer" onClick={toggleMenu}>Fillers | Marionettlinjer</Link></li>
    <li><Link to="/Fillers-Hyalase" onClick={toggleMenu}>Fillers | Hyalase</Link></li>
  </ul>

  ) : subMenu === "skinboosters" ? (
  <ul className="mobile-submenuu">
    <li><Link to="/Skinbooster-Ejal40" onClick={toggleMenu}>Skinbooster | Ejal40</Link></li>
    <li><Link to="/Skinbooster-LongLasting" onClick={toggleMenu}>Skinbooster | Longlasting</Link></li>
    <li><Link to="/Skinbooster-Restylane" onClick={toggleMenu}>Skinbooster | Restylane</Link></li>
    <li><Link to="/Skinbooster-Sunekos" onClick={toggleMenu}>Skinbooster | Sunekos</Link></li>
    <li><Link to="/Skinbooster-RRSEyes" onClick={toggleMenu}>Skinbooster | RRS Eyes</Link></li>
  </ul>


) : subMenu === "prp" ? (
  <ul className="mobile-submenuu">
    <li><Link to="PrpPrf-TearTrough" onClick={toggleMenu}>PRF | Tear Trough</Link></li>
    <li><Link to="/PrpPrf-EksemPsoriasis" onClick={toggleMenu}>PRP | Eksem & Psoriasis</Link></li>
    <li><Link to="/PrpPrf-Ansikte" onClick={toggleMenu}>PRP | Ansikte</Link></li>
    <li><Link to="/PrpPrf-AnsikteHals" onClick={toggleMenu}>PRP | Ansikte + Hals</Link></li>
    <li><Link to="/PrpPrf-RrsHair" onClick={toggleMenu}>RRS | XL Hair</Link></li>
    <li><Link to="/PrpPrf-Har" onClick={toggleMenu}>PRP | Hår</Link></li>
  </ul>

  ) : subMenu === "carboxy" ? (
  <ul className="mobile-submenuu">
    <li><Link to="/Cellutrix-RRS" onClick={toggleMenu}>RRS Cellutrix</Link></li>
    <li><Link to="/Carboxy" onClick={toggleMenu}>Carboxy</Link></li>
    <li><Link to="/Carboxy-Ogon" onClick={toggleMenu}>Carboxy Ögon</Link></li>
  </ul>


) : subMenu === "laser" ? (
  <ul className="mobile-submenuu">
    <li className="submenu-item-with-arrow">
      <Link to="/NordlysIpl" onClick={toggleMenu} className="mobile-link-with-arrow">
        Nordlys | IPL
      </Link>
      <span
        className="arrow"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openSubMenu("ipl");
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </li>

    <li className="submenu-item-with-arrow">
      <Link to="/Nordlys-Frax1550" onClick={toggleMenu} className="mobile-link-with-arrow">
        Nordlys | Frax 1550
      </Link>
      <span
        className="arrow"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openSubMenu("frax");
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </li>

    <li className="submenu-item-with-arrow">
      <Link to="/Nordlys-LightBright" onClick={toggleMenu} className="mobile-link-with-arrow">
        Nordlys | Light & Bright
      </Link>
      <span
        className="arrow"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openSubMenu("lightbright");
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </li>
  </ul>

) : subMenu === "ipl" ? (
  <ul className="mobile-submenuu">
    <li><Link to="/IPL-MindreOmrade" onClick={toggleMenu}>IPL | Mindre område</Link></li>
    <li><Link to="/IPL-Ansikte" onClick={toggleMenu}>IPL | Ansikte</Link></li>
    <li><Link to="/IPL-Ansikte-Hals" onClick={toggleMenu}>IPL | Ansikte + Hals</Link></li>
    <li><Link to="/IPL-Ansikte-Hals-Dekolletage" onClick={toggleMenu}>IPL | Ansikte + Hals + Dekolletage</Link></li>
    <li><Link to="/IPL-Dekolletage-Hals" onClick={toggleMenu}>IPL | Dekolletage eller Hals</Link></li>
  </ul>
) : subMenu === "frax" ? (
  <ul className="mobile-submenuu">
    <li><Link to="/Frax1550-Ansikte" onClick={toggleMenu}>Frax 1550 | Ansikte</Link></li>
    <li><Link to="/Frax1550-Ansikte-Hals" onClick={toggleMenu}>Frax 1550 | Ansikte + Hals</Link></li>
    <li><Link to="/Frax1550-Ansikte-Hals-Dekolletage" onClick={toggleMenu}>Frax 1550 | Ansikte + Hals + Dekolletage</Link></li>
    <li><Link to="/Frax1550-Hals-Dekolletage" onClick={toggleMenu}>Frax 1550 | Hals eller Dekolletage</Link></li>
  </ul>
) : subMenu === "lightbright" ? (
  <ul className="mobile-submenuu">
    <li><Link to="/LightBright-Ansikte" onClick={toggleMenu}>Light & Bright | Ansikte</Link></li>
    <li><Link to="/LightBright-Ansikte-Hals" onClick={toggleMenu}>Light & Bright | Ansikte + Hals</Link></li>
    <li><Link to="/LightBright-Ansikte-Hals-Dekolletage" onClick={toggleMenu}>Light & Bright | Ansikte + Hals + Dekolletage</Link></li>
  </ul>




) : subMenu === "priser" ? (
  <ul className="mobile-submenuu">
    <li><Link to="/injektionsbehandlingar-priser" onClick={toggleMenu}>ESTETISKA INJEKTIONSBEHANDLINGAR</Link></li>
    <li><Link to="/tradlyft-priser" onClick={toggleMenu}>TRÅDLYFT</Link></li>
    <li><Link to="/laserbehandlingar-priser" onClick={toggleMenu}>LASERBEHANDLINGAR</Link></li>
    <li><Link to="/ansiktsbehandlingar-priser" onClick={toggleMenu}>ANSIKTSBEHANDLINGAR</Link></li>
    <li><Link to="/hydra-facial-priser" onClick={toggleMenu}>HYDRA FACIAL</Link></li>
    <li><Link to="/massage-priser" onClick={toggleMenu}>MASSAGE</Link></li>
    <li><Link to="/vaxning-priser" onClick={toggleMenu}>VAXNING</Link></li>
  </ul>
  ) : null}
  
</div>

        </header>
  );
};

export default Navbar;





