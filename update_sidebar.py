import codecs
path = r'C:\Users\AIO\source\reposVsc\Centraly-Frontend\src\shared\components\layout\Sidebar.tsx'
with codecs.open(path, 'r', 'utf-8') as f:
    content = f.read()

helper = """  const closeOnMobile = () => {
    if (window.innerWidth < 768 && isOpen) {
      toggle();
    }
  };"""

content = content.replace('  return (\n    <aside', helper + '\n\n  return (\n    <aside')

content = content.replace('<Link\n                        to={item.path}', '<Link\n                        to={item.path}\n                        onClick={closeOnMobile}')

content = content.replace('<Link\n                to="/settings/finance-policies"', '<Link\n                to="/settings/finance-policies"\n                onClick={closeOnMobile}')

content = content.replace('<Link\n                to="/settings/wallets"', '<Link\n                to="/settings/wallets"\n                onClick={closeOnMobile}')

with codecs.open(path, 'w', 'utf-8') as f:
    f.write(content)
print("done")
