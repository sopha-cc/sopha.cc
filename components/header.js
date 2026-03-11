class Header extends HTMLElement {
  constructor() {
    super();
  }
connectedCallback(){
    this.innerHTML =   `
    	<header>
            <a href="/"> <p class="title">sopha.cc</p>
            </a>
            <nav>
                <!-- List Order is reversed to how it appears in navigation -->
                <ul>
                    <li>
                        <a href="https://bsky.app/profile/sopha.cc">
                            <img src="/images/bluesky.png" alt="bluesky logo"
                        ></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@TheMaid__/">
                            <img src="/images/youtube.png" alt="youtube logo"
                        ></a>
                    </li>
                    <li>
                        <a href="https://github.com/sopha-cc/">
                            <img src="/images/github-mark-white.png" alt="github logo"
                        ></a>
                    </li>
                    <li><a href="/projects">projects</a></li>
                    <li><a href="/blog"> blog </a></li>
                </ul>
            </nav>
            <br >
            <hr >
        </header>
    `;
}
}

customElements.define('header-component', Header);