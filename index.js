function createNavigation() {
    const sidePanel = document.createElement('div');
    sidePanel.style.position = 'fixed';
    sidePanel.style.left = '0';
    sidePanel.style.top = '0';
    sidePanel.style.width = '200px';
    sidePanel.style.height = '100%';
    sidePanel.style.background = 'linear-gradient(to right, #00065c, #59005c)';
    sidePanel.style.overflow = 'auto';
  
    const headers = document.querySelectorAll('h1, h2, h3');
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      const link = document.createElement('a');
      link.href = `#${header.id}`;
      link.textContent = header.textContent;
      link.style.display = 'block';
      link.style.color = 'white';
      link.style.padding = '10px';
      link.style.fontFamily = 'sans-serif';
      link.style.fontWeight = 'bold';
  
      if (header.tagName === 'H1') {
        sidePanel.appendChild(link);
      } else if (header.tagName === 'H2') {
        const subList = document.createElement('ul');
        subList.style.listStyle = 'none';
        subList.style.paddingLeft = '20px';
        const item = document.createElement('li');
        item.appendChild(link);
        subList.appendChild(item);
        sidePanel.appendChild(subList);
      } else if (header.tagName === 'H3') {
        const subList = document.createElement('ul');
        subList.style.listStyle = 'none';
        subList.style.paddingLeft = '40px';
        const item = document.createElement('li');
        item.appendChild(link);
        subList.appendChild(item);
        sidePanel.appendChild(subList);
      }
    }
  
    document.body.appendChild(sidePanel);
  }
  
  createNavigation();
  