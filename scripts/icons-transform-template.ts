const transformImports = (imports) => {
  const correctedImports = imports.map((importItem) => {
    const { specifiers, source } = importItem;
    const correctedSpecifiers = specifiers.map((specifier) => {
      const { local, imported } = specifier;
      if (imported?.name === "Ref") {
        return {
          type: "ImportSpecifier",
          local,
          imported,
          importKind: "type",
        };
      }
      return specifier;
    });

    return {
      ...importItem,
      specifiers: correctedSpecifiers,
    };
  });
  return correctedImports;
};

const template = (variables, { tpl }) => {
  const correctedImports = transformImports(variables.imports);
  return tpl`
  ${correctedImports};
  
  ${variables.interfaces};
  
  const ${variables.componentName} = (${variables.props}) => (
    ${variables.jsx}
  );
  
  ${variables.exports};
  `;
};

module.exports = template;
