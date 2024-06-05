import styled from 'styled-components';

export const ContainerHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  padding: 0.625rem;
  background-color: transparent;
  color: black;
  transition: background-color 0.3s ease, transform 0.3s ease;
  z-index: 1000;

  .logo-menu-container {
    display: flex;
    align-items: center;

    img {
      width: 180px;
    }

    .menu-responsi {
      margin-left: 1rem;
    }
  }

  .menu-responsi {
    display: none;
  }

  .menu-grid {
    cursor: pointer;
    color: #7a0d25;
  }

  .close-icon {
    color: #7a0d25;
  }

  .dropdown-responsi-container {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dropdown-responsi {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 400px;
  }

  .dropdown-responsi a {
    color: #7a0d25;
    text-decoration: none;
    padding: 20px;
    width: 100%;
    text-align: center;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }
  }

  &.scrolled {
    background-color: #fff;
    transform: scale(1.02);

    nav ul li {
      color: #7a0d25;
    }
  }

  nav ul {
    display: flex;
    list-style: none;
    gap: 35px;
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 16px;
  }

  nav ul a {
    text-decoration: none;
    color: #7a0d25;
    
  }

  nav ul li {
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      color: #7a0d25;
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;

    .menu-responsi {
      display: block;
      position: relative;
    }

    nav {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .logo-menu-container {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }

    img {
      width: 150px;
    }

    .menu-responsi .menu-grid {
      position: static;
      margin: 0;
    }

    .dropdown-responsi-container {
      width: 100%;
    }
  }
`;
