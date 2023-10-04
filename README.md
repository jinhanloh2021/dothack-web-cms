<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jinhanloh2021/dothack-web-cms">
    <img src="public/assets/images/favicon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">.Hack Website</h3>

  <p align="center">
    Website for SMU .Hack developer student club
    <br />
    <a href="https://github.com/jinhanloh2021/dothack-web-cms"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://dothack-web-cms.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/jinhanloh2021/dothack-web-cms/issues">Report Bug</a>
    ·
    <a href="https://github.com/jinhanloh2021/dothack-web-cms/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#run-locally">Run Locally</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li>
      <a href="#configuration">Configuration</a>
      <ul>
        <li><a href="#current-exco-display">Exco Display</a></li>
        <li><a href="#events-pagination">Events Pagination</a></li>
      </ul>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
      <ul>
        <li><a href="#branching-and-commit-rules">Branch Rules</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![.Hack][product-screenshot]](https://dothack-web-cms.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![Typescript][Typescript]][Typescript-url]
* [![Tailwind][Tailwind]][Tailwind-url]
* [![Vercel][Vercel]][Vercel-url]
* [![Sanity][Sanity]][Sanity-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jinhanloh2021/dothack-web-cms.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Run Locally
1. Run dev server
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
To access the Sanity Studio CMS, go to the admin route `https://localhost:3000/admin` to edit posts.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Configuration
### Current exco display
The `getCurrentCoreExco()` query gets the current core exco members to be displayed on the home screen.
```ts
export async function getCurrentCoreExco(): Promise<ExcoQuery[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'exco' && (position == 'President' || position == 'Vice President (internal)' || position == 'Vice President (external)' || position == 'Honorary General Secretary' || position == 'Honorary Finance Secretary') && term == "${getCurrentAY()}"] | order(term desc, position){
      name,
      position,
      term,
      'imageSrc': profile_pic.asset->url, // -> to dereference
      'lqip': profile_pic.asset->metadata.lqip,
      'hotspot': profile_pic.hotspot,
    }`
  );
}
```
The positions are hardcoded, and their term has to match the `getCurrentAY()` term. Eg. The current term is AY22/23, so only exco members with attribute term equal to AY22/23 will be queried.
```ts
export function getCurrentAY(): string {
  const currentYear = new Date().getFullYear(); // Assume elections in September
  if (new Date().getMonth() < 8) {
    return `AY${(currentYear - 1) % 100}/${currentYear % 100}`;
  } else {
    return `AY${currentYear % 100}/${(currentYear + 1) % 100}`;
  }
}
```
This has the assumption that the elections are in September, so the new term starts in September. Eg. 09/23 -> AY22/23, 10/23 -> AY23/24.
To adjust which exco is displayed, you can either change this value in the function, or adjust the term attribute in the CMS for each exco.

### Events Pagination
Number of events displayed per page is hardcoded to **6**. This can be changed in the [file](/app/(site)/events/[pagination]/page.tsx).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Dark mode
- [ ] See [open issues](https://github.com/jinhanloh2021/dothack-web-cms/issues) for a full list of proposed features (and known issues)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star.

1. Fork the Project
2. Create your Feature Branch from the `dev` branch
```sh
git checkout dev
git checkout -b feat/issue-id/MyProposedFeature
```
3. Commit your Changes (`git commit -m 'feat #issue-id : ' -m 'I have added this feature successfully'`)
4. Push to the Branch (`git push origin feat/issue-id/MyProposedFeature`)
5. Open a Pull Request to `dev` branch

### Branching and commit rules
See the rules for this repo [here](https://github.com/jinhanloh2021/dothack-web-cms/issues/1)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the [MIT License](https://github.com/jinhanloh2021/dothack-web-cms/blob/main/LICENSE.md).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
Project Link: [https://github.com/jinhanloh2021/dothack-web-cms](https://github.com/jinhanloh2021/dothack-web-cms)

Email: [jinhan.loh.2021@scis.smu.edu.sg](mailto:jinhan.loh.2021@scis.smu.edu.sg)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [SMU .Hack](https://www.instagram.com/smu.hack/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jinhanloh2021/dothack-web-cms.svg?style=for-the-badge
[contributors-url]: https://github.com/jinhanloh2021/dothack-web-cms/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jinhanloh2021/dothack-web-cms.svg?style=for-the-badge
[forks-url]: https://github.com/jinhanloh2021/dothack-web-cms/network/members
[stars-shield]: https://img.shields.io/github/stars/jinhanloh2021/dothack-web-cms.svg?style=for-the-badge
[stars-url]: https://github.com/jinhanloh2021/dothack-web-cms/stargazers
[issues-shield]: https://img.shields.io/github/issues/jinhanloh2021/dothack-web-cms.svg?style=for-the-badge
[issues-url]: https://github.com/jinhanloh2021/dothack-web-cms/issues
[license-shield]: https://img.shields.io/github/license/jinhanloh2021/dothack-web-cms.svg?style=for-the-badge
[license-url]: https://github.com/jinhanloh2021/dothack-web-cms/blob/dev/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jinhanloh/
[product-screenshot]: public/assets/images/DothackWebSS.PNG
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Vercel]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com/
[Sanity]: https://img.shields.io/static/v1?style=for-the-badge&message=Sanity&color=F03E2F&logo=Sanity&logoColor=FFFFFF&label=
[Sanity-url]: https://www.sanity.io/
[Tailwind]: https://img.shields.io/static/v1?style=for-the-badge&message=Tailwind+CSS&color=222222&logo=Tailwind+CSS&logoColor=06B6D4&label=
[Tailwind-url]: https://tailwindcss.com/