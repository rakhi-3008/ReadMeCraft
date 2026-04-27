export class BasicInfoSection {
  constructor(container, store) {
    this.container = container;
    this.store     = store;
    this._render();
    this._bindInputs();
  }

  _render() {
    this.container.innerHTML = `
      <div class="field-group">
        <label class="field-label">Full Name</label>
        <input class="field-inp" id="f-name" type="text" placeholder="e.g. Rahul Sharma" autocomplete="name"/>
      </div>
      <div class="field-group">
        <label class="field-label">Role / Tagline</label>
        <input class="field-inp" id="f-role" type="text" placeholder="Full Stack Developer | Open Source Enthusiast"/>
      </div>
      <div class="field-group">
        <label class="field-label">Short Bio</label>
        <textarea class="field-inp field-ta" id="f-bio" rows="2" placeholder="Passionate about building things that live on the internet..."></textarea>
      </div>
      <div class="two-col">
        <div class="field-group">
          <label class="field-label">GitHub Username</label>
          <input class="field-inp" id="f-github" type="text" placeholder="yourusername"/>
        </div>
        <div class="field-group">
          <label class="field-label">Location</label>
          <input class="field-inp" id="f-location" type="text" placeholder="Chandigarh, India"/>
        </div>
      </div>
      <div class="two-col">
        <div class="field-group">
          <label class="field-label">Portfolio / Website</label>
          <input class="field-inp" id="f-website" type="url" placeholder="https://yoursite.dev"/>
        </div>
        <div class="field-group">
          <label class="field-label">Email</label>
          <input class="field-inp" id="f-email" type="email" placeholder="hello@example.com"/>
        </div>
      </div>
    `;
  }

  _bindInputs() {
    const fields = ["name", "role", "bio", "github", "location", "website", "email"];
    fields.forEach(key => {
      const el = this.container.querySelector(`#f-${key}`);
      if (!el) return;
      el.addEventListener("input", () => {
        this.store.set({ [key]: el.value });
      });
    });
  }

  populate(data) {
    ["name", "role", "bio", "github", "location", "website", "email"].forEach(key => {
      const el = this.container.querySelector(`#f-${key}`);
      if (el && data[key] != null) el.value = data[key];
    });
  }
}