const allResourceTypes = Object.values(chrome.declarativeNetRequest.ResourceType);

const rules: chrome.declarativeNetRequest.Rule[] = [
  {
    id: 1,
    priority: 1,
    action: {
      type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
      requestHeaders: [
        {
          operation: chrome.declarativeNetRequest.HeaderOperation.SET,
          header: 'x-test-request-header',
          value: 'test-',
        },
      ]
    },
    condition: {
      urlFilter: 'https://open.spotify.com/',
      resourceTypes: allResourceTypes,
    }
  }
];

export default rules;