# Contributing to anjaniraj.live

Thank you for your interest in contributing! 🎉

This document provides guidelines and instructions for contributing to this project.

---

## 🎯 Before You Start

- Read the [README.md](README.md) to understand the project philosophy
- Familiarize yourself with the [file structure](README.md#-file-structure)
- Check existing [issues](https://github.com/devanjaniraj/anjaniraj.live/issues) and [pull requests](https://github.com/devanjaniraj/anjaniraj.live/pulls)

---

## 🤝 Types of Contributions

### 🐛 Report a Bug
Found an issue? Help us fix it!

**Before submitting:**
- Check if the bug already exists in [Issues](https://github.com/devanjaniraj/anjaniraj.live/issues)
- Test the issue on latest version
- Include details: browser, OS, steps to reproduce

**To report:**
1. [Open a new issue](https://github.com/devanjaniraj/anjaniraj.live/issues/new?labels=bug)
2. Use the bug report template
3. Provide as much detail as possible

### 💡 Suggest a Feature
Have an idea for improvement? We'd love to hear it!

**Good suggestions include:**
- Performance improvements
- Design enhancements
- New interactive elements
- Better accessibility
- Documentation improvements

**To suggest:**
1. [Open a new issue](https://github.com/devanjaniraj/anjaniraj.live/issues/new?labels=enhancement)
2. Clearly describe the feature
3. Explain why it would be useful
4. Provide examples if possible

### 📚 Improve Documentation
Better docs help everyone!

**Documentation improvements:**
- Clearer instructions
- Better examples
- Fixed typos
- Additional resources
- Better formatting

### 🎨 Design Improvements
Help make the site look better!

**Design contributions:**
- CSS enhancements
- Layout improvements
- Typography suggestions
- Color scheme ideas
- Responsive design fixes

### 🔧 Code Improvements
Help optimize the codebase!

**Code contributions:**
- Bug fixes
- Performance optimizations
- Code cleanup
- New features
- Better JavaScript interactions

---

## 🚀 How to Contribute

### Step 1: Fork the Repository
```bash
# Click "Fork" button on GitHub, then:
git clone https://github.com/YOUR_USERNAME/anjaniraj.live.git
cd anjaniraj.live
```

### Step 2: Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
# or for bug fixes:
git checkout -b fix/bug-description
```

**Branch naming convention:**
- Features: `feature/feature-name`
- Bug fixes: `fix/bug-description`
- Docs: `docs/update-description`
- Style: `style/change-description`

### Step 3: Make Your Changes

**For code changes:**
- Follow the existing code style
- Keep changes minimal and focused
- Test thoroughly before submitting
- Ensure responsive design works

**For documentation:**
- Use clear, concise language
- Include examples where helpful
- Check grammar and spelling
- Update table of contents if needed

**For design changes:**
- Maintain the minimalist philosophy
- Test on multiple devices
- Ensure accessibility standards
- Consider performance impact

### Step 4: Test Your Changes

**Before submitting, verify:**
- [ ] Site works on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Responsive design works on mobile/tablet
- [ ] All links work correctly
- [ ] No console errors
- [ ] Performance is maintained
- [ ] Accessibility standards are met (WCAG 2.1)
- [ ] Changes align with project philosophy

**Manual testing:**
```bash
# Option 1: Open in browser
open index.html

# Option 2: Use local server
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Step 5: Commit Your Changes

```bash
git add .
git commit -m "type: Brief description of changes"
```

**Commit message format:**
```
type: Short description

Longer explanation of changes if needed.
- List any important details
- Explain why this change was needed
```

**Commit types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation update
- `style:` CSS/design changes
- `refactor:` Code refactoring
- `perf:` Performance improvement
- `test:` Testing changes
- `chore:` Build, dependencies, etc.

**Examples:**
```
feat: Add dark mode toggle
fix: Fix mobile menu responsiveness
docs: Improve setup instructions
style: Update color scheme
perf: Optimize image loading
```

### Step 6: Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then:
1. Go to [Pull Requests](https://github.com/devanjaniraj/anjaniraj.live/pulls)
2. Click "New Pull Request"
3. Select your branch
4. Fill out the PR template
5. Click "Create Pull Request"

**In your PR description, include:**
- What changes you made
- Why you made them
- Any related issues (use `Closes #123`)
- Screenshots if relevant
- Testing notes

---

## 📋 Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Branch created from latest `main`
- [ ] Code follows project style
- [ ] Changes are tested thoroughly
- [ ] No unnecessary files added
- [ ] Commit messages are clear
- [ ] Documentation is updated
- [ ] No breaking changes
- [ ] Responsive design verified
- [ ] Accessibility standards met
- [ ] Performance impact assessed

---

## 🎨 Code Style Guide

### HTML
- Use semantic HTML5 elements
- Proper indentation (2 spaces)
- Meaningful class/id names
- Keep markup clean and minimal

### CSS
- Keep organization logical (layout, typography, components, utilities)
- Use meaningful class names (BEM naming when appropriate)
- Avoid inline styles
- Mobile-first approach
- 2-space indentation
- Comment complex sections

### JavaScript
- Keep it minimal and purposeful
- Use vanilla JS (no frameworks)
- Meaningful variable names
- Comment non-obvious logic
- Avoid global variables when possible
- Optimize for performance

### Example:
```html
<!-- Good -->
<section class="hero">
  <h1>Welcome</h1>
</section>

<!-- Avoid -->
<div style="margin: 20px;">
  <h1 style="color: blue;">Welcome</h1>
</div>
```

---

## 📱 Testing Requirements

### Browser Compatibility
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Responsive Design
- [ ] Desktop (1920px+)
- [ ] Laptop (1024px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

### Performance
- [ ] Page loads in < 2 seconds
- [ ] No console errors
- [ ] No layout shifts
- [ ] Animations are smooth

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast sufficient (WCAG AA)
- [ ] No accessibility issues in browser tools

---

## 📖 Documentation Standards

When documenting changes:

1. **README.md** - Update if user-facing changes
2. **Code comments** - Explain complex logic
3. **Commit messages** - Clear descriptions
4. **PR description** - Comprehensive explanation

### Good documentation includes:
- Clear, simple language
- Relevant examples
- Links to related resources
- Updated table of contents
- Proper formatting

---

## ❓ Questions or Need Help?

- 💬 **[Start a Discussion](https://github.com/devanjaniraj/anjaniraj.live/discussions)**
- 📧 **Email:** [Kanjanikumar52@gmail.com](mailto:Kanjanikumar52@gmail.com)
- 🐙 **GitHub:** [@devanjaniraj](https://github.com/devanjaniraj)

---

## 🙏 Recognition

Contributors will be recognized:
- Listed in project contributors
- Mentioned in commit history
- Acknowledged in releases

---

## 📝 Code of Conduct

### Be Respectful
- Treat others with respect and kindness
- Welcome different opinions and ideas
- Be patient and helpful

### Be Constructive
- Provide helpful feedback
- Focus on ideas, not individuals
- Assume good intentions

### Be Inclusive
- Welcome contributions from everyone
- Value diverse perspectives
- Create a safe environment

---

## 🎯 Project Philosophy

Remember, this project emphasizes:
- ✨ **Simplicity** - Keep it minimal
- ⚡ **Performance** - Fast and efficient
- 🎨 **Intentionality** - Every element serves a purpose
- 📚 **Clarity** - Clean, readable code

When contributing, ask yourself: *Does this addition align with these principles?*

---

## 🚀 After Your PR is Merged

Congratulations! 🎉 Your contribution is now part of the project!

**What happens next:**
1. Your changes are deployed via GitHub Pages (within minutes)
2. You're added to the contributors list
3. Changes appear on the live site

---

## 📚 Additional Resources

- [GitHub Help](https://docs.github.com/)
- [Git Documentation](https://git-scm.com/doc)
- [HTML Best Practices](https://www.w3schools.com/whatis/whatis_htmlvalidation.asp)
- [CSS Best Practices](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Web Accessibility](https://www.w3.org/WAI/)
- [Web Performance](https://web.dev/performance/)

---

## ✨ Thank You!

Your contributions make this project better for everyone. We truly appreciate your time and effort! 🙏

---

<div align="center">

**Ready to contribute? [Start here!](https://github.com/devanjaniraj/anjaniraj.live/issues)**

</div>
