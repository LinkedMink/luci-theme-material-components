include $(TOPDIR)/rules.mk

PKG_NAME:=luci-theme-material-components
PKG_VERSION:=1.0.0
PKG_RELEASE:=1
PKG_LICENSE:=MIT
PKG_LICENSE_FILES:=LICENSE.md
PKG_MAINTAINER:=Harlan Sang <harlan.sang@linkedmink.net>
PKG_SOURCE_PROTO:=git
PKG_SOURCE_URL:=https://github.com/LinkedMink/luci-theme-material-components.git
PKG_BUILD_DEPENDS:=node/host node-npm/host

LUCI_TITLE:=Material Components Theme
LUCI_DESCRIPTION:=A theme based on Material Components Web packages
LUCI_DEPENDS:=

define Package/luci-theme-material-components/postrm
#!/bin/sh
[ -n "$${IPKG_INSTROOT}" ] || {
	uci -q delete luci.themes.MaterialComponents
	uci commit luci
}
endef

include ../../luci.mk

define Host/Configure
	npm ci
endef

define Host/Compile
	npm run build
endef

# define Host/Install
# endef

$(eval $(call HostBuild))

# call BuildPackage - OpenWrt buildroot signature
