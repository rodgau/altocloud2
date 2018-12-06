// Initializes widgets configuration object	
window._genesys.widgets = {
      main: {
            debug: true,
            theme: "dark",
            lang: "en",
            customStylesheetID: "genesys_widgets_custom",
            preload: [
                  "sidebar", "webchat"
            ]
      },
      webchat: {
            dataURL: "http://genlablinux:8080/genesys/2/chat/test1",
            apikey: "",
            userData: {},
            cometD: {
                  enabled: false
            },
            autoInvite: {
                  enabled: false,
                  timeToInviteSeconds: 5,
                  inviteTimeoutSeconds: 30
            },
            chatButton: {
                  enabled: true,
                  openDelay: 1000,
                  effectDuration: 300,
                  hideDuringInvite: true
            },
            uploadsEnabled: false,
            ajaxTimeout: 20000
      },
      sidebar: {
            showOnStartup: false,
            position: "right",
            expandOnHover: true,
            channels: [
                  {
                        name: "ChannelSelector",
                        clickCommand: "ChannelSelector.open",
                        readyEvent: "ChannelSelector.ready",
                        clickOptions: {},
                        displayName: "Live Assist",
                        displayTitle: "Get live help",
                        icon: "agent"
                  },
                  {
                        name: "Search",
                        clickCommand: "Search.open",
                        clickOptions: {},
                        readyEvent: "Search.ready",
                        displayName: "Search",
                        displayTitle: "Search",
                        icon: "knowledge-center"
                  }
            ]
      }
};
