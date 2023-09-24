+++
title = "Enable Visual Styles on Existing Applications"
+++

Some old application doesn’t enable
[visual styles](https://docs.microsoft.com/en-us/windows/desktop/controls/themes-overview) by default. But you can add
an extra [manifest](https://docs.microsoft.com/en-us/windows/desktop/sbscs/manifests) file to the application’s
executable file to
[enable the visual style](https://docs.microsoft.com/en-us/windows/desktop/controls/cookbook-overview).

First, write a manifest file:

```xml
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">
  <dependency>
    <dependentAssembly>
      <assemblyIdentity type="win32" name="Microsoft.Windows.Common-Controls" version="6.0.0.0" processorArchitecture="*" publicKeyToken="6595b64144ccf1df" language="*"></assemblyIdentity>
    </dependentAssembly>
  </dependency>
</assembly>
```

Assume the manifest file is “app.exe.manifest” and the executable file is “app.exe”, you can use
“[mt.exe](https://docs.microsoft.com/en-us/windows/desktop/sbscs/mt-exe)” to add the manifest file to the executable
file:

```cmd
mt.exe -manifest "app.exe.manifest" -outputresource:"app.exe"
```

If the executable file already contains a manifest, this operation will replace its original manifest. If you don’t want
to lose the original manifest file, you can merge the new manifest with the original manifest using following command:

```cmd
mt.exe -manifest "app.exe.manifest" -inputresource:"app.exe" -outputresource:"app.exe"
```

You may want to make a backup copy of the original executable file, in case something unexpected happens.
