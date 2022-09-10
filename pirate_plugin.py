# I'm not paying for code libraries bruh
import sys

GREENSOCK_HOST_CODE = """103,114,101,101,110,115,111,99,107,46,99,111,109"""
plugin_code = sys.stdin.read()
# Remove redirect by faking safe URLs
plugin_code = plugin_code.replace(GREENSOCK_HOST_CODE, "window.location.host")
# Replace console.log with a no-op
plugin_code = plugin_code.replace("console.log", "(function(){})")
print(plugin_code)
