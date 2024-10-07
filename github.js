import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "./apiKeys.js";

export class Github {
  constructor() {
    this.client_id = GITHUB_CLIENT_ID;
    this.client_secret = GITHUB_CLIENT_SECRET;
    this.repos_count = 3;
    this.repos_sort = "created : asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile, // same as profile(key) : profile (value)
      repos,
    };
  }
}
