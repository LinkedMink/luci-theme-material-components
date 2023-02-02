include $(TOPDIR)/rules.mk

LUCI_TITLE:=Material Components Theme
LUCI_DEPENDS:=

define Package/luci-theme-material-components/postrm
#!/bin/sh
[ -n "$${IPKG_INSTROOT}" ] || {
	uci -q delete luci.themes.Material
	uci commit luci
}
endef

include ../../luci.mk

# call BuildPackage - OpenWrt buildroot signature
