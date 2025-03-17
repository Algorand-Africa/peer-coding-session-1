export const ASSET_CREATOR_ARC_32 = {
  "hints": {
    "createApplication()void": {
      "call_config": {
        "no_op": "CREATE"
      }
    },
    "createAsset()void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "claimAsset()void": {
      "call_config": {
        "no_op": "CALL"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {
        "asset": {
          "type": "uint64",
          "key": "asset"
        }
      },
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 1
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCmludGNibG9jayAwIDEKYnl0ZWNibG9jayAweDYxNzM3MzY1NzQKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuMTA2LjIKLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsZ29yYW5kZm91bmRhdGlvbi9URUFMU2NyaXB0CgovLyBUaGlzIGNvbnRyYWN0IGlzIGNvbXBsaWFudCB3aXRoIGFuZC9vciBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgQVJDczogWyBBUkM0IF0KCi8vIFRoZSBmb2xsb3dpbmcgdGVuIGxpbmVzIG9mIFRFQUwgaGFuZGxlIGluaXRpYWwgcHJvZ3JhbSBmbG93Ci8vIFRoaXMgcGF0dGVybiBpcyB1c2VkIHRvIG1ha2UgaXQgZWFzeSBmb3IgYW55b25lIHRvIHBhcnNlIHRoZSBzdGFydCBvZiB0aGUgcHJvZ3JhbSBhbmQgZGV0ZXJtaW5lIGlmIGEgc3BlY2lmaWMgYWN0aW9uIGlzIGFsbG93ZWQKLy8gSGVyZSwgYWN0aW9uIHJlZmVycyB0byB0aGUgT25Db21wbGV0ZSBpbiBjb21iaW5hdGlvbiB3aXRoIHdoZXRoZXIgdGhlIGFwcCBpcyBiZWluZyBjcmVhdGVkIG9yIGNhbGxlZAovLyBFdmVyeSBwb3NzaWJsZSBhY3Rpb24gZm9yIHRoaXMgY29udHJhY3QgaXMgcmVwcmVzZW50ZWQgaW4gdGhlIHN3aXRjaCBzdGF0ZW1lbnQKLy8gSWYgdGhlIGFjdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhlIGNvbnRyYWN0LCBpdHMgcmVzcGVjdGl2ZSBicmFuY2ggd2lsbCBiZSAiKk5PVF9JTVBMRU1FTlRFRCIgd2hpY2gganVzdCBjb250YWlucyAiZXJyIgp0eG4gQXBwbGljYXRpb25JRAohCnB1c2hpbnQgNgoqCnR4biBPbkNvbXBsZXRpb24KKwpzd2l0Y2ggKmNhbGxfTm9PcCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKmNyZWF0ZV9Ob09wICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRAoKKk5PVF9JTVBMRU1FTlRFRDoKCS8vIFRoZSByZXF1ZXN0ZWQgYWN0aW9uIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIGNvbnRyYWN0LiBBcmUgeW91IHVzaW5nIHRoZSBjb3JyZWN0IE9uQ29tcGxldGU/IERpZCB5b3Ugc2V0IHlvdXIgYXBwIElEPwoJZXJyCgovLyBjcmVhdGVBcHBsaWNhdGlvbigpdm9pZAoqYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uOgoJLy8gZXhlY3V0ZSBjcmVhdGVBcHBsaWNhdGlvbigpdm9pZAoJY2FsbHN1YiBjcmVhdGVBcHBsaWNhdGlvbgoJaW50YyAxIC8vIDEKCXJldHVybgoKLy8gY3JlYXRlQXBwbGljYXRpb24oKTogdm9pZApjcmVhdGVBcHBsaWNhdGlvbjoKCXByb3RvIDAgMAoJcmV0c3ViCgovLyBjcmVhdGVBc3NldCgpdm9pZAoqYWJpX3JvdXRlX2NyZWF0ZUFzc2V0OgoJLy8gZXhlY3V0ZSBjcmVhdGVBc3NldCgpdm9pZAoJY2FsbHN1YiBjcmVhdGVBc3NldAoJaW50YyAxIC8vIDEKCXJldHVybgoKLy8gY3JlYXRlQXNzZXQoKTogdm9pZAovLwovLyBUaGlzIGNyZWF0ZXMgdGhlIGFzc2V0IHRoYXQgY2FuIGJlIGNsYWltZWQKLy8gb25jZSBieSBhbnkgYWRkcmVzcy4KY3JlYXRlQXNzZXQ6Cglwcm90byAwIDAKCgkvLyBQdXNoIGVtcHR5IGJ5dGVzIGFmdGVyIHRoZSBmcmFtZSBwb2ludGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIGxvY2FsIHZhcmlhYmxlcwoJcHVzaGJ5dGVzIDB4CgoJLy8gY29udHJhY3RzL0Fzc2V0Q3JlYXRvci5hbGdvLnRzOjEzCgkvLyBhc3NlcnQodGhpcy50eG4uc2VuZGVyID09PSB0aGlzLmFwcC5jcmVhdG9yKQoJdHhuIFNlbmRlcgoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYXBwX3BhcmFtc19nZXQgQXBwQ3JlYXRvcgoJcG9wCgk9PQoJYXNzZXJ0CgoJLy8gY29udHJhY3RzL0Fzc2V0Q3JlYXRvci5hbGdvLnRzOjE0CgkvLyBhc3NlcnQoIXRoaXMuYXNzZXQuZXhpc3RzKQoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYnl0ZWMgMCAvLyAgImFzc2V0IgoJYXBwX2dsb2JhbF9nZXRfZXgKCXN3YXAKCXBvcAoJIQoJYXNzZXJ0CgoJLy8gY29udHJhY3RzL0Fzc2V0Q3JlYXRvci5hbGdvLnRzOjE2CgkvLyBuZXdBc3NldCA9IHNlbmRBc3NldENyZWF0aW9uKHsKCS8vICAgICAgIGNvbmZpZ0Fzc2V0TmFtZTogJ0FTQycsCgkvLyAgICAgICBjb25maWdBc3NldFRvdGFsOiAxMDAwMCwKCS8vICAgICAgIGNvbmZpZ0Fzc2V0RGVjaW1hbHM6IDAsCgkvLyAgICAgICBjb25maWdBc3NldEZyZWV6ZTogdGhpcy5hcHAuYWRkcmVzcywKCS8vICAgICAgIGNvbmZpZ0Fzc2V0TWFuYWdlcjogdGhpcy5hcHAuYWRkcmVzcywKCS8vICAgICB9KQoJaXR4bl9iZWdpbgoJcHVzaGludCAzIC8vIGFjZmcKCWl0eG5fZmllbGQgVHlwZUVudW0KCgkvLyBjb250cmFjdHMvQXNzZXRDcmVhdG9yLmFsZ28udHM6MTcKCS8vIGNvbmZpZ0Fzc2V0TmFtZTogJ0FTQycKCXB1c2hieXRlcyAweDQxNTM0MyAvLyAiQVNDIgoJaXR4bl9maWVsZCBDb25maWdBc3NldE5hbWUKCgkvLyBjb250cmFjdHMvQXNzZXRDcmVhdG9yLmFsZ28udHM6MTgKCS8vIGNvbmZpZ0Fzc2V0VG90YWw6IDEwMDAwCglwdXNoaW50IDEwMDAwCglpdHhuX2ZpZWxkIENvbmZpZ0Fzc2V0VG90YWwKCgkvLyBjb250cmFjdHMvQXNzZXRDcmVhdG9yLmFsZ28udHM6MTkKCS8vIGNvbmZpZ0Fzc2V0RGVjaW1hbHM6IDAKCWludGMgMCAvLyAwCglpdHhuX2ZpZWxkIENvbmZpZ0Fzc2V0RGVjaW1hbHMKCgkvLyBjb250cmFjdHMvQXNzZXRDcmVhdG9yLmFsZ28udHM6MjAKCS8vIGNvbmZpZ0Fzc2V0RnJlZXplOiB0aGlzLmFwcC5hZGRyZXNzCglnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwoJaXR4bl9maWVsZCBDb25maWdBc3NldEZyZWV6ZQoKCS8vIGNvbnRyYWN0cy9Bc3NldENyZWF0b3IuYWxnby50czoyMQoJLy8gY29uZmlnQXNzZXRNYW5hZ2VyOiB0aGlzLmFwcC5hZGRyZXNzCglnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwoJaXR4bl9maWVsZCBDb25maWdBc3NldE1hbmFnZXIKCgkvLyBGZWUgZmllbGQgbm90IHNldCwgZGVmYXVsdGluZyB0byAwCglpbnRjIDAgLy8gMAoJaXR4bl9maWVsZCBGZWUKCgkvLyBTdWJtaXQgaW5uZXIgdHJhbnNhY3Rpb24KCWl0eG5fc3VibWl0CglpdHhuIENyZWF0ZWRBc3NldElECglmcmFtZV9idXJ5IDAgLy8gbmV3QXNzZXQ6IHVpbnQ2NAoKCS8vIGNvbnRyYWN0cy9Bc3NldENyZWF0b3IuYWxnby50czoyNAoJLy8gdGhpcy5hc3NldC52YWx1ZSA9IG5ld0Fzc2V0CglieXRlYyAwIC8vICAiYXNzZXQiCglmcmFtZV9kaWcgMCAvLyBuZXdBc3NldDogdWludDY0CglhcHBfZ2xvYmFsX3B1dAoJcmV0c3ViCgovLyBjbGFpbUFzc2V0KCl2b2lkCiphYmlfcm91dGVfY2xhaW1Bc3NldDoKCS8vIGV4ZWN1dGUgY2xhaW1Bc3NldCgpdm9pZAoJY2FsbHN1YiBjbGFpbUFzc2V0CglpbnRjIDEgLy8gMQoJcmV0dXJuCgovLyBjbGFpbUFzc2V0KCk6IHZvaWQKLy8KLy8gVGhpcyBtZXRob2QgdHJhbnNmZXJzIGFuZCBmcmVlemVzIG9uZSB1bml0IG9mIHRoZQovLyBhc3NldCB0byB0aGUgYWNjb3VudCB0aGF0IGNhbGxzIGl0LgpjbGFpbUFzc2V0OgoJcHJvdG8gMCAwCgoJLy8gY29udHJhY3RzL0Fzc2V0Q3JlYXRvci5hbGdvLnRzOjMyCgkvLyBhc3NlcnQodGhpcy50eG4uc2VuZGVyLmFzc2V0QmFsYW5jZSh0aGlzLmFzc2V0LnZhbHVlKSA9PT0gMCkKCXR4biBTZW5kZXIKCWJ5dGVjIDAgLy8gICJhc3NldCIKCWFwcF9nbG9iYWxfZ2V0Cglhc3NldF9ob2xkaW5nX2dldCBBc3NldEJhbGFuY2UKCXBvcAoJaW50YyAwIC8vIDAKCT09Cglhc3NlcnQKCgkvLyBjb250cmFjdHMvQXNzZXRDcmVhdG9yLmFsZ28udHM6MzQKCS8vIHNlbmRBc3NldFRyYW5zZmVyKHsKCS8vICAgICAgIGFzc2V0QW1vdW50OiAxLAoJLy8gICAgICAgYXNzZXRSZWNlaXZlcjogdGhpcy50eG4uc2VuZGVyLAoJLy8gICAgICAgeGZlckFzc2V0OiB0aGlzLmFzc2V0LnZhbHVlLAoJLy8gICAgIH0pCglpdHhuX2JlZ2luCglwdXNoaW50IDQgLy8gYXhmZXIKCWl0eG5fZmllbGQgVHlwZUVudW0KCgkvLyBjb250cmFjdHMvQXNzZXRDcmVhdG9yLmFsZ28udHM6MzUKCS8vIGFzc2V0QW1vdW50OiAxCglpbnRjIDEgLy8gMQoJaXR4bl9maWVsZCBBc3NldEFtb3VudAoKCS8vIGNvbnRyYWN0cy9Bc3NldENyZWF0b3IuYWxnby50czozNgoJLy8gYXNzZXRSZWNlaXZlcjogdGhpcy50eG4uc2VuZGVyCgl0eG4gU2VuZGVyCglpdHhuX2ZpZWxkIEFzc2V0UmVjZWl2ZXIKCgkvLyBjb250cmFjdHMvQXNzZXRDcmVhdG9yLmFsZ28udHM6MzcKCS8vIHhmZXJBc3NldDogdGhpcy5hc3NldC52YWx1ZQoJYnl0ZWMgMCAvLyAgImFzc2V0IgoJYXBwX2dsb2JhbF9nZXQKCWl0eG5fZmllbGQgWGZlckFzc2V0CgoJLy8gRmVlIGZpZWxkIG5vdCBzZXQsIGRlZmF1bHRpbmcgdG8gMAoJaW50YyAwIC8vIDAKCWl0eG5fZmllbGQgRmVlCgoJLy8gU3VibWl0IGlubmVyIHRyYW5zYWN0aW9uCglpdHhuX3N1Ym1pdAoKCS8vIGNvbnRyYWN0cy9Bc3NldENyZWF0b3IuYWxnby50czo0MAoJLy8gc2VuZEFzc2V0RnJlZXplKHsKCS8vICAgICAgIGZyZWV6ZUFzc2V0OiB0aGlzLmFzc2V0LnZhbHVlLAoJLy8gICAgICAgZnJlZXplQXNzZXRGcm96ZW46IHRydWUsCgkvLyAgICAgICBmcmVlemVBc3NldEFjY291bnQ6IHRoaXMudHhuLnNlbmRlciwKCS8vICAgICB9KQoJaXR4bl9iZWdpbgoJcHVzaGludCA1IC8vIGFmcnoKCWl0eG5fZmllbGQgVHlwZUVudW0KCgkvLyBjb250cmFjdHMvQXNzZXRDcmVhdG9yLmFsZ28udHM6NDEKCS8vIGZyZWV6ZUFzc2V0OiB0aGlzLmFzc2V0LnZhbHVlCglieXRlYyAwIC8vICAiYXNzZXQiCglhcHBfZ2xvYmFsX2dldAoJaXR4bl9maWVsZCBGcmVlemVBc3NldAoKCS8vIGNvbnRyYWN0cy9Bc3NldENyZWF0b3IuYWxnby50czo0MgoJLy8gZnJlZXplQXNzZXRGcm96ZW46IHRydWUKCWludGMgMSAvLyAxCglpdHhuX2ZpZWxkIEZyZWV6ZUFzc2V0RnJvemVuCgoJLy8gY29udHJhY3RzL0Fzc2V0Q3JlYXRvci5hbGdvLnRzOjQzCgkvLyBmcmVlemVBc3NldEFjY291bnQ6IHRoaXMudHhuLnNlbmRlcgoJdHhuIFNlbmRlcgoJaXR4bl9maWVsZCBGcmVlemVBc3NldEFjY291bnQKCgkvLyBGZWUgZmllbGQgbm90IHNldCwgZGVmYXVsdGluZyB0byAwCglpbnRjIDAgLy8gMAoJaXR4bl9maWVsZCBGZWUKCgkvLyBTdWJtaXQgaW5uZXIgdHJhbnNhY3Rpb24KCWl0eG5fc3VibWl0CglyZXRzdWIKCipjcmVhdGVfTm9PcDoKCXB1c2hieXRlcyAweGI4NDQ3YjM2IC8vIG1ldGhvZCAiY3JlYXRlQXBwbGljYXRpb24oKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCAqYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uCgoJLy8gdGhpcyBjb250cmFjdCBkb2VzIG5vdCBpbXBsZW1lbnQgdGhlIGdpdmVuIEFCSSBtZXRob2QgZm9yIGNyZWF0ZSBOb09wCgllcnIKCipjYWxsX05vT3A6CglwdXNoYnl0ZXMgMHhhNjVhYWJmZSAvLyBtZXRob2QgImNyZWF0ZUFzc2V0KCl2b2lkIgoJcHVzaGJ5dGVzIDB4ZjU1N2EwMzggLy8gbWV0aG9kICJjbGFpbUFzc2V0KCl2b2lkIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggKmFiaV9yb3V0ZV9jcmVhdGVBc3NldCAqYWJpX3JvdXRlX2NsYWltQXNzZXQKCgkvLyB0aGlzIGNvbnRyYWN0IGRvZXMgbm90IGltcGxlbWVudCB0aGUgZ2l2ZW4gQUJJIG1ldGhvZCBmb3IgY2FsbCBOb09wCgllcnI=",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDEw"
  },
  "contract": {
    "name": "AssetCreator",
    "desc": "",
    "methods": [
      {
        "name": "createApplication",
        "args": [],
        "returns": {
          "type": "void"
        }
      },
      {
        "name": "createAsset",
        "desc": "This creates the asset that can be claimed\nonce by any address.",
        "args": [],
        "returns": {
          "type": "void"
        }
      },
      {
        "name": "claimAsset",
        "desc": "This method transfers and freezes one unit of the\nasset to the account that calls it.",
        "args": [],
        "returns": {
          "type": "void"
        }
      }
    ]
  }
}