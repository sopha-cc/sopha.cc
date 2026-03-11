class Footer extends HTMLElement {
  constructor() {
    super();
  }
connectedCallback(){
    this.innerHTML =   `
	<footer>
		<p>
			You are free to use any of the content on this website without any
			liscensing of any kind.
		</p>
		<p>
			Come hang out with me and some awesome people in the
			<a href="https://discord.gg/XKrUJE5ya4"
				>Voiddread Community Discord
				<img src="/images/discord.png" alt="discord logo"
			></a>
		</p>
	</footer>
    `;
}
}

customElements.define('footer-component', Footer);